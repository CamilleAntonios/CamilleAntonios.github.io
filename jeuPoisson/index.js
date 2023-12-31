const rightArrowCode=39
const leftArrowCode=37
const upArrowCode=38
const downArrowCode=40

const MAX_DECHETS_DISPLAYED=5
const FRAMERATE=60

const horizontalPoissonSpeed=9
const verticalPoissonSpeed=4

let addDechetsInterval
let loopInterval

let goLeft=false
let goRight=false
let goUp=false
let goDown = false

let poissonClass

let collisionDetectee=false

let elOcean
let elSol

var dechetListe=[]

let displayMethodsToCall=[]


$(() => {
    poissonClass=new Poisson($("#poisson"))
    elOcean=$("#ocean")
    elSol=$("#sol")

    $("body").on("keydown", (e) => {
        poissonClass.receiveKeyDown(e)

    }).on("keyup", (e) => {
        poissonClass.receiveKeyUp(e)
    })

    addDechetsInterval=setInterval(addNewDechetToList, 460)

    loopInterval=setInterval(loop, 1000/FRAMERATE)

})
function fonctionVictoire(){
    document.getElementById("modal").style.visibility="visible";
}
function mort(){
    document.getElementById("modal-failure").style.visibility="visible"
    poissonClass.elPoisson.css("transition", "transform 0.3s ease-in-out 0.5s, filter 0.4s, opacity 0.7s")
    poissonClass.elPoisson.css("transform", "rotate(-1170deg)")
    poissonClass.elPoisson.css("filter", "grayscale(100%)")
    setTimeout(() => {
        poissonClass.elPoisson.css("background-image", 'url("./dibujos/poissong-mort.png")')
    }, 1000)
    setTimeout(() => {
        poissonClass.elPoisson.css("opacity", "0.0")
    }, 1500)
}
function addNewDechetToList() {
    dechetListe.push(new Dechet())
    if(dechetListe.length>MAX_DECHETS_DISPLAYED) {
        //$("#"+dechetListe[0].elDechet.attr("id")).remove()
        dechetListe.shift()
    }
}

function loop() {
    displayMethodsToCall = [poissonClass.computeNextDisplay()]

    for(let dechet of dechetListe) {
        displayMethodsToCall.push(dechet.computeNextDisplay())
        collisionDetectee=dechet.checkCollision(poissonClass)
        if(collisionDetectee) {
            mort()
            $(".dechet").css("visibility", "hidden")
            dechetListe=[]
            clearInterval(loopInterval)
            clearInterval(addDechetsInterval)
            console.log("cleared interval")
            return
        }
    }
    displayMethodsToCall[0](poissonClass)
    for(let i=1; i < displayMethodsToCall.length; i++) {
        displayMethodsToCall[i](dechetListe[i-1])
    }

    poissonClass.victoire()

    if (poissonClass.isVictoire){
        fonctionVictoire()
        clearInterval(loopInterval)
        $(".dechet").css("visibility", "hidden")
        dechetListe=[]
        clearInterval(addDechetsInterval)
    }
}
