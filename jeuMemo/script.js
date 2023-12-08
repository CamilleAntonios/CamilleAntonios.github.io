let isPlaying = false;
let memoCarte = ["vent","vent","glace","glace","poisson","poisson","soleil","soleil","tornade","tornade"];
let memoWait = false;
let memoWin = 0;
let memoEnCours = -1;
let memoTries = 6;

let turnCardAnimation={
    rotate: "360deg"
}
let turnCardAnimationDuration=500//milliseconds

$(function() {
    document.querySelector("#boutonPlay").addEventListener("click",()=>{
        document.querySelector("#memo-start").style.opacity = "0";
        $("#memo-play").css("display", "flex")
        setTimeout(() => {
            document.querySelector("#memo-play").style.opacity = "1";
            $(".memo").css("height", ( $("#memo-play").height() + 150) + "px")
        }, 700)
        setTimeout(() => {
            $("#memo-start").css("display", "none")
        }, 700)
    });
    document.querySelector("#memo0").addEventListener("click",()=>{
        Memory(0);
    });
    document.querySelector("#memo1").addEventListener("click",()=>{
        Memory(1);
    });
    document.querySelector("#memo2").addEventListener("click",()=>{
        Memory(2);
    });
    document.querySelector("#memo3").addEventListener("click",()=>{
        Memory(3);
    });
    document.querySelector("#memo4").addEventListener("click",()=>{
        Memory(4);
    });
    document.querySelector("#memo5").addEventListener("click",()=>{
        Memory(5);
    });
    document.querySelector("#memo6").addEventListener("click",()=>{
        Memory(6);
    });
    document.querySelector("#memo7").addEventListener("click",()=>{
        Memory(7);
    });
    document.querySelector("#memo8").addEventListener("click",()=>{
        Memory(8);
    });
    document.querySelector("#memo9").addEventListener("click",()=>{
        Memory(9);
    });
    document.querySelector("#reset").addEventListener("click",()=>{
        isPlaying=false;
        location.reload()
    });
});

function Memory(position){
    $("#memo"+position).animate(turnCardAnimation, turnCardAnimationDuration)
    if (document.getElementById("memo"+position).src == document.getElementById("memoEx").src){
      if (!isPlaying){ //Le debut du jeu, on met random les images
        shuffle(memoCarte);
        isPlaying=true;
      }
      setTimeout(() => {
          if(!memoWait&&memoWin<memoCarte.length/2&&memoTries>0){
              if (memoEnCours==-1){ //On est en train de choisir la 1ere carte
                  memoEnCours=position;
                  document.getElementById("memo"+position).src = "./image-memo/"+memoCarte[position]+".png";
              }
              else if (position!=memoEnCours){ //On est en train de choisir la 2ere carte qui n'est pas la meme que la 1ere
                  document.getElementById("memo"+position).src = './image-memo/'+memoCarte[position]+'.png';
                  if (memoCarte[position]!=memoCarte[memoEnCours]){ //C'est pas les mm et il nous reste des tries
                      memoTries--; //tentative qui diminue
                      memoWait=true;  //pour empecher de cliquer autre part pendant que nos 2 cartes sont retournées
                      document.getElementById("triesMemo").innerHTML = "Vous avez "+memoTries+" essais restants !" ;


                      setTimeout(() => {
                          document.getElementById("memo"+position).src = "./image-memo/card.png";
                          document.getElementById("memo"+memoEnCours).src = "./image-memo/card.png";

                          turnCardAnimation.rotate="0deg"

                          $("#memo"+position).animate(turnCardAnimation, turnCardAnimationDuration)
                          $("#memo"+memoEnCours).animate(turnCardAnimation, turnCardAnimationDuration)

                          turnCardAnimation.rotate="360deg"

                          memoEnCours=-1;
                          memoWait=false;
                          if(memoTries==0){
                              document.getElementById("triesMemo").innerHTML = "You have lost ;( click on reset to start a new game!";
                              isPlaying=false;
                          }
                      }, 2500);

                  }
                  else if (memoTries>0){  //Cartes pareil mais il reste des tries
                      memoEnCours=-1;
                      memoWin++;
                      //alert("fact");
                      $("#modal-info").css("visibility", "visible")
                      document.querySelector(".modal-info-close").addEventListener("click",(event)=>{
                        
                        $("#modal-info").css("visibility", "hidden")
                      })
                  }
              }
          }
      }, turnCardAnimationDuration/2)

      if(memoWin>=memoCarte.length/2){
        document.getElementById("triesMemo").innerHTML = "Félicitations, vous avez gagné !";
        isPlaying=false;
      }
    }
}

function shuffle(array) {
    let currentIndex = array.length,  randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex > 0) {

      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }

    return array;
  }