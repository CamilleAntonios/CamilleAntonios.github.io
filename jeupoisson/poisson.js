class Poisson {

    constructor(elementPoisson) {
        this.goRight=false
        this.goLeft=false
        this.goUp=false
        this.goDown=false
        this.elPoisson=elementPoisson //jquery object

        this.x=retrieveValueWithoutPx(this.elPoisson.css("left"))
        this.y=retrieveValueWithoutPx(this.elPoisson.css("top"))

        this.width=this.elPoisson.width()
        this.height=this.elPoisson.height()
        this.isVictoire=false
    }

    get element() {
        return this.elPoisson
    }

    loop() {
        let leftOffset=retrieveValueWithoutPx(this.elPoisson.css("left"))
        let topOffset=retrieveValueWithoutPx(this.elPoisson.css("top"))


        if(goLeft && leftOffset>=horizontalPoissonSpeed) {
            this.elPoisson.css("left", (-horizontalPoissonSpeed + leftOffset)+"px")
            this.x=(-horizontalPoissonSpeed + leftOffset)
        }
        else if(goLeft) {
            this.elPoisson.css("left", "0px")
            this.x=0
        }
        else if(goRight && leftOffset<=$("html").width()-this.elPoisson.width()-verticalPoissonSpeed) {
            this.elPoisson.css("left", (horizontalPoissonSpeed + leftOffset)+"px")
            this.x=(horizontalPoissonSpeed + leftOffset)
        }
        else if(goRight) {
            this.elPoisson.css("left", ($("html").width()-this.elPoisson.width()) + "px")
            this.x=($("html").width()-this.elPoisson.width())
        }

        if(goUp && topOffset>=verticalPoissonSpeed) {
            this.elPoisson.css("top", (-verticalPoissonSpeed + topOffset)+"px")
            this.y=(-verticalPoissonSpeed + topOffset)
        }
        else if(goDown && topOffset<=elOcean.height() - retrieveValueWithoutPx(elOcean.css("top")) - this.elPoisson.height()-verticalPoissonSpeed) {
            this.elPoisson.css("top", (verticalPoissonSpeed + topOffset)+"px")
            this.y=(verticalPoissonSpeed + topOffset)
        }
    }

    receiveKeyDown(e) {
        switch(e.which) {
            case rightArrowCode:
                goRight = true
                break
            case leftArrowCode:
                goLeft = true
                break
            case upArrowCode:
                goUp=true
                break
            case downArrowCode:
                goDown=true
                break
        }
    }

    receiveKeyUp(e) {
        switch(e.which) {
            case rightArrowCode:
                goRight = false
                break
            case leftArrowCode:
                goLeft = false
                break
            case upArrowCode:
                goUp=false
                break
            case downArrowCode:
                goDown=false
                break
        }
    }
    getIsVictoire(){
        return this.isVictoire;
    }
    victoire(){
        if ((this.x+this.width)==window.innerWidth){
            this.isVictoire=true;
            
        }
        
    
    }
    getPos(){
        console.log("coordonnées: ("+this.x+" ,"+this.y+")\n");
    }
}