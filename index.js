let pendu = document.getElementById("pendu");
let memory = document.getElementById("memory");
let jeuPoisson = document.getElementById("jeuPoisson");
let cliquerNettoyer = document.getElementById("cliquerNettoyer");
let texteLeafy = document.getElementById("texteLeafy");

pendu.addEventListener("click",()=> window.location.href="https://camilleantonios.github.io/pendu.html"); 
memory.addEventListener("click", ()=> window.location.href="https://camilleantonios.github.io/memory.html");
jeuPoisson.addEventListener("click", ()=> window.location.href="https://camilleantonios.github.io/jeupoisson/index.html");
cliquerNettoyer.addEventListener("click", ()=> window.location.href="https://camilleantonios.github.io/clic.html");

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