let pendu = document.getElementById("arbre");
let memory = document.getElementById("carte");
let jeuPoisson = document.getElementById("poisson");
let cliquerNettoyer = document.getElementById("balai");
let texteLeafy = document.getElementById("texteLeafy");

pendu.addEventListener("click",()=> window.location.href="https://camilleantonios.github.io/jeuPendu/");
memory.addEventListener("click", ()=> window.location.href="https://camilleantonios.github.io/jeuMemory/");
jeuPoisson.addEventListener("click", ()=> window.location.href="https://camilleantonios.github.io/jeuPoisson");
cliquerNettoyer.addEventListener("click", ()=> window.location.href="https://camilleantonios.github.io/jeuNettoyer");

pendu.onmouseover = function(){
    texteLeafy.innerText = "Clique sur cette image pour aller vers le jeu du Pendu !";
}
pendu.onmouseout = function(){
    texteLeafy.innerText = "Bonjour et bienvenue ! Clique sur une des images pour jouer !";
}

memory.onmouseover = function(){
    texteLeafy.innerText = "Clique sur cette image pour aller vers le jeu du Memory !";
}
memory.onmouseout = function(){
    texteLeafy.innerText = "Bonjour et bienvenue ! Clique sur une des images pour jouer";
}

jeuPoisson.onmouseover = function(){
    texteLeafy.innerText = "Clique sur cette image pour aller vers le jeu du Poisson !";
}
jeuPoisson.onmouseout = function(){
    texteLeafy.innerText = "Bonjour et bienvenue ! Clique sur une des images pour jouer";
}

cliquerNettoyer.onmouseover = function(){
    texteLeafy.innerText = "Clique sur cette image pour aller vers le jeu Cliquer/Nettoyer !";
}
cliquerNettoyer.onmouseout = function(){
    texteLeafy.innerText = "Bonjour et bienvenue ! Clique sur une des images pour jouer";
}