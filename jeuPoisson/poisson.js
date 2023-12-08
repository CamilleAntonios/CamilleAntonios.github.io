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
        this.leftOffset=0
        this.topOffset=0
    }

    get element() {
        return this.elPoisson
    }

    computeNextDisplay() {
        this.leftOffset=retrieveValueWithoutPx(this.elPoisson.css("left"))
        this.topOffset=retrieveValueWithoutPx(this.elPoisson.css("top"))


        if(goLeft && this.leftOffset>=horizontalPoissonSpeed) {
            this.x=(-horizontalPoissonSpeed + this.leftOffset)
            return this.displayMoveLeft
        }
        else if(goLeft) {
            this.x=0
            return this.displaySetToZeroLeft
        }
        else if(goRight && this.leftOffset<=$("html").width()-this.elPoisson.width()-verticalPoissonSpeed) {
            this.x=(horizontalPoissonSpeed + this.leftOffset)
            return this.displayMoveRight
        }
        else if(goRight) {
            this.x=($("html").width()-this.elPoisson.width())
            return this.displaySetToZeroRight
        }

        if(goUp && this.topOffset>=verticalPoissonSpeed) {
            this.y=(-verticalPoissonSpeed + this.topOffset)
            return this.displayMoveUp
        }
        else if(goDown && this.topOffset<=elOcean.height() - retrieveValueWithoutPx(elOcean.css("top")) - this.elPoisson.height()-verticalPoissonSpeed) {
            this.y=(verticalPoissonSpeed + this.topOffset)
            return this.displayMoveDown
        }
        return function() {}
    }

    displayMoveLeft(poissonParam) {
        poissonParam.elPoisson.css("left", (-horizontalPoissonSpeed + poissonParam.leftOffset)+"px")
        poissonParam.elPoisson.removeClass("poisson-looking-down")
        poissonParam.elPoisson.removeClass("poisson-looking-up")
    }

    displaySetToZeroLeft(poissonParam) {
        poissonParam.elPoisson.css("left", "0px")
        poissonParam.elPoisson.removeClass("poisson-looking-down")
        poissonParam.elPoisson.removeClass("poisson-looking-up")
    }

    displayMoveRight(poissonParam) {
        poissonParam.elPoisson.css("left", (horizontalPoissonSpeed + poissonParam.leftOffset)+"px")
        poissonParam.elPoisson.removeClass("poisson-looking-down")
        poissonParam.elPoisson.removeClass("poisson-looking-up")
    }

    displaySetToZeroRight(poissonParam) {
        poissonParam.elPoisson.css("left", ($("html").width()-poissonParam.elPoisson.width()) + "px")
        poissonParam.elPoisson.removeClass("poisson-looking-down")
        poissonParam.elPoisson.removeClass("poisson-looking-up")
    }

    displayMoveUp(poissonParam) {
        poissonParam.elPoisson.css("top", (-verticalPoissonSpeed + poissonParam.topOffset)+"px")
        poissonParam.elPoisson.removeClass("poisson-looking-down")
        poissonParam.elPoisson.addClass("poisson-looking-up")
    }

    displayMoveDown(poissonParam) {
        poissonParam.elPoisson.css("top", (verticalPoissonSpeed + poissonParam.topOffset)+"px")
        poissonParam.elPoisson.addClass("poisson-looking-down")
        poissonParam.elPoisson.removeClass("poisson-looking-up")
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

    victoire() {
        if((this.x + this.width) >= $("body").width()-160) {
            this.isVictoire=true
        }
    }

    getPos(){
        console.log("coordonnées: ("+this.x+" ,"+this.y+")\n");
    }
}