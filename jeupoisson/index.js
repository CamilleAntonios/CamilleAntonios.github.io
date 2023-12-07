const rightArrowCode=39
const leftArrowCode=37
const upArrowCode=38
const downArrowCode=40

const MAX_DECHETS_DISPLAYED=5
const FRAMERATE=30

const horizontalPoissonSpeed=9
const verticalPoissonSpeed=4

let goLeft=false
let goRight=false
let goUp=false
let goDown = false

let poissonClass

let collisionDetectee=false

let elOcean
let elSol

var dechetListe=[]

$(() => {
    poissonClass=new Poisson($("#poisson"))
    elOcean=$("#ocean")
    elSol=$("#sol")



    window.requestAnimationFrame(loop)

    $("body").on("keydown", (e) => {
        poissonClass.receiveKeyDown(e)

    }).on("keyup", (e) => {
        poissonClass.receiveKeyUp(e)
    })

    requestAnimationFrame(loop)

    setInterval(() => {
        dechetListe.push(new Dechet())
        if(dechetListe.length>MAX_DECHETS_DISPLAYED) {
            //$("#"+dechetListe[0].elDechet.attr("id")).remove()
            dechetListe.shift()
        }
    }, 1000)
})

function loop() {
    poissonClass.loop()
    for(let dechet of dechetListe) {
        dechet.loop()
        collisionDetectee=dechet.checkCollision(poissonClass)
        if(collisionDetectee) {
            alert("COLLISION OMG LE POISSONGGG")
        }
    }
    setTimeout(() => requestAnimationFrame(loop), 1000/FRAMERATE)
}
