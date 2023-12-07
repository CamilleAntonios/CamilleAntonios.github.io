class Dechet {
    static dechetCounter=0
    static DECHET_SPEED=4
    static gapFromSides=150
    static DEFAULT_TOP_GAP=50
    constructor() {
        this.isActive=true
        Dechet.dechetCounter++

        this.x=Dechet.generateRandomPosition()
        this.y=Dechet.DEFAULT_TOP_GAP

        this.elDechet=$("<div></div>").addClass("dechet").attr("id", "dechet-"+Dechet.dechetCounter)
        this.elDechet.css("left", this.x + "px")
        this.elDechet.css("top", this.y+"px")

        this.width=this.elDechet.width()
        this.height=this.elDechet.height()

        $("body").append(this.elDechet)
    }

    static generateRandomPosition() {
        return Dechet.getRandomInt(Dechet.gapFromSides, window.innerWidth-Dechet.gapFromSides)
    }

    static getRandomInt(min, max) { //chat gpt
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    loop() {
        if(this.isActive) {
            let topOffset = retrieveValueWithoutPx(this.elDechet.css("top"))
            if (topOffset <= window.innerHeight - this.elDechet.height()) {
                this.elDechet.css("top", topOffset + Dechet.DECHET_SPEED + "px")
                this.y=topOffset+Dechet.DECHET_SPEED
            }
            else {
                this.isActive=false
            }
        }
    }

    checkCollision(poisson) {//chat gpt
        const chevauchementHorizontal =
            this.x < poisson.x + poisson.width &&
            this.x + this.width > poisson.x;

        // Vérifier si les blocs se chevauchent sur l'axe vertical
        const chevauchementVertical =
            this.y < poisson.y + poisson.height &&
            this.y + this.height > poisson.y;

        // Retourner vrai si les deux chevauchements sont vrais, indiquant une collision
        return chevauchementHorizontal && chevauchementVertical;
    }
}