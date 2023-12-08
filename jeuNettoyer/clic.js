document.addEventListener("DOMContentLoaded", function () {
    const gameContainer = document.getElementById("gameContainer");
    const numFond = (Math.floor(Math.random() * 3) + 1);
    const body = document.body;
    //const path =  'url("./fond' + numFond + '.jpg")';
    //const path="background.jpg"
    //body.style.backgroundImage = path;


    for (let i = 0; i < 5; i++) {
        createTrash();
    }
    var i = 5;

    function createTrash() {
        const trash = document.createElement("img");
        const numDechet = (Math.floor(Math.random() * 4) + 1);
        trash.classList.add(`trash`);
        //trash.src = `./dibujos/dechet${numDechet}.png`;
        trash.src = `./dibujos/dechet3.png`;
        // Position aléatoire
        const randomX = Math.random() * (window.innerWidth - 50);
        const randomY = (RandomIntRange(window.innerHeight/2, window.innerHeight));
        console.log("la window height: "+window.innerHeight);
        console.log("window height/2: " +window.innerHeight/2)
        console.log("randomY: "+randomY)
        const taille = (Math.floor(Math.random() * 70) + 30)/100;

        trash.style.width = `${taille*80}px`
        trash.style.height = `${taille*80}px`
        trash.style.left = `${randomX}px`;
        trash.style.top = `${randomY}px`;


        trash.addEventListener("click", function () {
            trash.remove();
            i -= 1;
            if(i === 0){
                //const numInfo = (Math.floor(Math.random() * 3) + 1);
                const numInfo = 1;
                const infos = document.getElementById(`info1`);
                infos.style.display = 'block';
            }
        });

        gameContainer.appendChild(trash);
        function RandomIntRange(min, max) {  
    
            return Math.floor(Math.random() * (max - min) ) + min;
            
          }
    }
});