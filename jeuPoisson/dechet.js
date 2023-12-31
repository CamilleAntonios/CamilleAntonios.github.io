class Dechet {
    static dechetCounter=0
    static DECHET_SPEED=3
    static gapFromSides=200
    static DEFAULT_TOP_GAP=0
    static dechetsDibujos=["./dibujos/dechet1.PNG","./dibujos/dechet2.PNG","./dibujos/dechet3.PNG","./dibujos/dechet5.PNG"]
    constructor() {
        this.isActive=true
        Dechet.dechetCounter++
        this.dechetsDibujos=Dechet.dechetsDibujos
        this.x=Dechet.generateRandomPosition()
        this.y=Dechet.DEFAULT_TOP_GAP

        this.elDechet=$("<div></div>").addClass("dechet").attr("id", "dechet-"+Dechet.dechetCounter)
        this.elDechet.css("left", this.x + "px")
        this.elDechet.css("top", this.y+"px")

        $("#ocean").append(this.elDechet)

        this.elDechet.css("background-image", "url('"+Dechet.dechetsDibujos[Dechet.getRandomIntDibujo(4)]+"')")

        this.width=this.elDechet.width()
        this.height=this.elDechet.height()

        console.log(this)
    }
    static getRandomIntDibujo(max) {
        return Number(Math.floor(Math.random() * max));
      }

    static generateRandomPosition() {
        return Dechet.getRandomInt(Dechet.gapFromSides, window.innerWidth-Dechet.gapFromSides)
    }

    static getRandomInt(min, max) { //chat gpt
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    display(dechetParam) {
        dechetParam.elDechet.css("top", dechetParam.y + Dechet.DECHET_SPEED + "px")
    }

    computeNextDisplay() {
        if(this.isActive) {
            let topOffset = retrieveValueWithoutPx(this.elDechet.css("top"))
            if (topOffset <= $("body").height() - this.elDechet.height()) {
                this.y=topOffset+Dechet.DECHET_SPEED
            }
            else {
                this.isActive=false
            }
        }

        return this.display
    }

    pointDansRectangle(point, rectangle) {
        return (
            point.x >= rectangle.x &&
            point.x <= rectangle.x + rectangle.width &&
            point.y >= rectangle.y &&
            point.y <= rectangle.y + rectangle.height
        );
    }

    checkCollision(poisson) {
        // Coordonnées des coins du bloc
        const coinHautGaucheBloc = { x: this.x, y: this.y };
        const coinHautDroiteBloc = { x: this.x + this.width, y: this.y };
        const coinBasGaucheBloc = { x: this.x, y: this.y + this.height };
        const coinBasDroiteBloc = { x: this.x + this.width, y: this.y + this.height };

        // Coordonnées des coins du poisson
        const coinHautGauchePoisson = { x: poisson.x, y: poisson.y };
        const coinHautDroitePoisson = { x: poisson.x + poisson.width, y: poisson.y };
        const coinBasGauchePoisson = { x: poisson.x, y: poisson.y + poisson.height };
        const coinBasDroitePoisson = { x: poisson.x + poisson.width, y: poisson.y + poisson.height };

        // Vérifier si l'un des coins du bloc est à l'intérieur du poisson
        const coinDansPoisson =
            this.pointDansRectangle(coinHautGaucheBloc, poisson) ||
            this.pointDansRectangle(coinHautDroiteBloc, poisson) ||
            this.pointDansRectangle(coinBasGaucheBloc, poisson) ||
            this.pointDansRectangle(coinBasDroiteBloc, poisson);

        // Vérifier si l'un des coins du poisson est à l'intérieur du bloc
        const coinDansBloc =
            this.pointDansRectangle(coinHautGauchePoisson, this) ||
            this.pointDansRectangle(coinHautDroitePoisson, this) ||
            this.pointDansRectangle(coinBasGauchePoisson, this) ||
            this.pointDansRectangle(coinBasDroitePoisson, this);

        // Retourner vrai si l'un des coins est à l'intérieur de l'autre forme, indiquant une collision
        return coinDansPoisson || coinDansBloc;
    }

}