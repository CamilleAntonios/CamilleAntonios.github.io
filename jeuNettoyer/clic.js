document.addEventListener("DOMContentLoaded", function () {
    const gameContainer = document.getElementById("gameContainer");
    const numFond = (Math.floor(Math.random() * 3) + 1);
    const body = document.body;
    const path =  'url("./fond' + numFond + '.jpg")';
    body.style.backgroundImage = path;


    for (let i = 0; i < 5; i++) {
        createTrash();
    }
    var i = 5;

    function createTrash() {
        const trash = document.createElement("img");
        const numDechet = (Math.floor(Math.random() * 3) + 1);
        trash.classList.add(`trash`);
        trash.src = `dechet${numDechet}.png`;

        // Position aléatoire
        const randomX = Math.random() * (window.innerWidth - 50);
        const randomY = Math.random() * (window.innerHeight - 50);
        const taille = (Math.floor(Math.random() * 70) + 30)/100;

        trash.style.width = `${taille*80}px`
        trash.style.height = `${taille*80}px`
        trash.style.left = `${randomX}px`;
        trash.style.top = `${randomY}px`;


        trash.addEventListener("click", function () {
            trash.remove();
            i -= 1;
            if(i === 0){
                const numInfo = (Math.floor(Math.random() * 3) + 1);
                const infos = document.getElementById(`info${numInfo}`);
                infos.style.display = 'block';
            }
        });

        gameContainer.appendChild(trash);
    }
});