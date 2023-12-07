//variable indiquant le nombre d'erreurs
let nberreurs = 0;
//variable du mot à découvrir envoyé par le serveur
let motadecouvrir = "";
//variable de mot que le joueur decouvre
let currentmot = [];
let currentmotjoli = [];

let limiteerreurs = 6;
//liste des lettres contenues dans le mot et deja testées
let yellow = [];
//liste des lettres non contenues dans le mot et deja testées
let red = [];
//booleen qui indique si la partie a commencée
let enjeu = true;
let niveau = "";
let min = 0;
let max = 0;
//liste de lettres deja testées
let dejatest=  [];

let win = false;
let lose = false;
//dico de mots 
this.dico = ["WOOL","CROCHET","FASHION","HOOK","HANDMADE","GREEN","SUSTAINABLE","RUNWAY","CATWALK","STAR","SHEEP","CLOTHES"];

//fonction pour initialiser le jeu
function newGame(){
    //révéler les autres parties du jeu
    let tab=["gauche", "centre", "droite"];
    for(let id of tab){
       let element = document.getElementById(id);
       element.classList.remove("notDisplay");
    }

    //cacher le bouton jouer et le select
    document.getElementById("jouer").classList.add("notDisplay");
    currentmotjoli = [];
    nberreurs = 1;

    //choisir un mot du dico 
    const chiffre = Math.floor(Math.random()*dico.length);
    motadecouvrir = dico[chiffre];
    console.log(motadecouvrir);
    for(let i=0; i<motadecouvrir.length ; i++){
        currentmot.push("_");
        currentmotjoli.push((" _"));
    }
    console.log(currentmot.join(""));
    document.getElementById("motad").textContent = currentmotjoli.join("");
    enjeu = true;
}
    

//tester les entrées clavier
function testLettreClavier(l, evt){
    if(!enjeu){
        return;
    }
    document.getElementById("modal-warning").style.display = "none"; 
    let lettre = false;
    for(i=0; i<26; i++){
        if(String.fromCharCode(97+i)==l){
            lettre = true;
        }
    }
    if(lettre){
        testLettre(l,evt);
    }
    //si le caractère n'est pas une lettre: informer le joueur
    else{ 
        document.getElementById("modal-warning").innerText = "Veuillez entrer une lettre";
        document.getElementById("modal-warning").style.display = "block"; 
        evt.stopImmediatePropagation();
    }
}


//fonction qui test les lettres
function testLettre(lettre){ 
    document.getElementById("modal-warning").style.display = "none";
    if(!enjeu){
        return 
    } 
    //tester si la lettre a déjà été testée
    let deja = false;
    for(let i=0; i<dejatest.length; i++){
        if(lettre==dejatest[i]){
            deja = true; 
        }
    }  
    //si la lettre a déjà été testée: informer le joueur
    if(deja){
        document.getElementById("modal-warning").innerText = "Cette lettre a déjà été testée";
        document.getElementById("modal-warning").style.display = "block";
        return;
    }
    if(!deja){
        dejatest.push(lettre);
    
        var value = lettre.toUpperCase();
        //la lettre n'est pas dans le mot 
        if(motadecouvrir.includes(value)==false){
            nberreurs+=1;
            red.push(value);
            console.log(nberreurs);
            if(nberreurs>=limiteerreurs){
                //document.getElementById("pendu-text").textContent = "You lost, try again "; 
                document.getElementById(value).style.background= "rgb(100, 34, 66)";
                enjeu=false; 
                lose = true;
            }
            else{
                document.getElementById(value).style.background = "rgb(100, 34, 66)";   
                //document.getElementById("pendu-text").textContent = "You have "+(6-nberreurs)+" tries left";
            }
  
        }
        //si la lettre est dans le mot 
        else{
            yellow.push(value);
            let nbtirets = 0;
            document.getElementById(value).style.background="#C1FF33";
            for(let i=0; i<motadecouvrir.length; i++){
                if(value==motadecouvrir[i]){
                    currentmot[i] = value;
                    currentmotjoli[i] = value;
                }
                if(currentmot[i]=="_"){
                    nbtirets+=1;
                }
            }
            document.getElementById("motad").innerText = currentmotjoli.join(""); 
            if(nbtirets==0){
              enjeu = false;
              win = true;
            }
        }
        
        document.getElementById("motad").innerText = currentmotjoli.join("");
        //cas où le joueur a trouvé le mot
        if(win){
            document.getElementById("modal-gagner").style.display = "block";
        }
        //cas où le joueur a perdu
        else if(lose){
            document.getElementById("modal-perdre").style.display = "block";
            document.getElementById("motsiperdu").innerText = motadecouvrir;
        }
        //cas où la lettre est dans le mot
        /*
        else if(inWord){
            document.getElementById(value).style.color = "#F4D35E";
            document.getElementById(value).classList.add("yellowL");
            yellow.push(value);
        }
        
        //cas où la lettre n'est pas dans le mot
        else if(!inWord){
            document.getElementById(value).style.color = "#F95738";
            document.getElementById(value).classList.add("redL");  
            red.push(value);
        }
        */
        updateImage(); 
    }
}


//fonction pour update l'image  
function updateImage(){
    document.getElementById("img").setAttribute('src','./images/tree'+nberreurs+'.png');
} 


//fonction pour préparer une nouvelle partie
function refresh(){
        //reinitialiser les variables du jeu:
        console.log("dans refresh");
        nberreurs = 1;
        currentmotjoli = [];
        currentmot = [];
        enjeu = false;
        motadecouvrir = "";
        dejatest= [];
        win = false;
        lose = false;
        red = [];
        yellow = [];

        //reinitialisé la page de début (select et bouton jouer)
        let tab=["gauche", "centre", "droite"];
        for(let id of tab){
            let element = document.getElementById(id);
            element.classList.add("notDisplay");
        }
        //montrer le bouton jouer et le select
        document.getElementById("jouer").classList.remove("notDisplay");

        //reinitialiser les lettres:
        for(i=0; i<26; i++){
            console.log("dans for pour refresh color lettre");
            document.getElementsByClassName("lettre")[i].style.color = "#114c3d";
            document.getElementsByClassName("lettre")[i].style.background = "#3dae91" ;
             
        }
        for(i=0; i<red.length; i++){
            document.getElementById(red[i]).classList.remove("redL");
        }

        for(i=0; i<yellow.length; i++){
            document.getElementById(yellow[i]).classList.remove("yellowL");
        }

        //cacher les modales
        document.getElementById("modal-warning").style.display = "none";
        document.getElementById("modal-gagner").style.display = "none";
        document.getElementById("modal-perdre").style.display = "none";
        
        //vider le mot a decouvrir
        document.getElementById("motad").innerText = "";

        //reinitialiser l'image 
        updateImage();
    
}
//pour écouter si les lettres du clavier sont pressés
window.addEventListener('keydown', function (e) {
    testLettreClavier(e.key, e)
  }, false);


document.getElementById("jouer").addEventListener("click", newGame);
document.getElementsByClassName("rejouer")[0].addEventListener("click", refresh);
document.getElementsByClassName("rejouer")[1].addEventListener("click", refresh);

document.getElementById(String.fromCharCode(65)).addEventListener("click", ()=>testLettre(String.fromCharCode(65)));
document.getElementById(String.fromCharCode(66)).addEventListener("click", ()=>testLettre(String.fromCharCode(66)));
document.getElementById(String.fromCharCode(67)).addEventListener("click", ()=>testLettre(String.fromCharCode(67)));
document.getElementById(String.fromCharCode(68)).addEventListener("click", ()=>testLettre(String.fromCharCode(68)));
document.getElementById(String.fromCharCode(69)).addEventListener("click", ()=>testLettre(String.fromCharCode(69)));
document.getElementById(String.fromCharCode(70)).addEventListener("click", ()=>testLettre(String.fromCharCode(70)));
document.getElementById(String.fromCharCode(71)).addEventListener("click", ()=>testLettre(String.fromCharCode(71)));
document.getElementById(String.fromCharCode(72)).addEventListener("click", ()=>testLettre(String.fromCharCode(72)));
document.getElementById(String.fromCharCode(73)).addEventListener("click", ()=>testLettre(String.fromCharCode(73)));
document.getElementById(String.fromCharCode(74)).addEventListener("click", ()=>testLettre(String.fromCharCode(74)));
document.getElementById(String.fromCharCode(75)).addEventListener("click", ()=>testLettre(String.fromCharCode(75)));
document.getElementById(String.fromCharCode(76)).addEventListener("click", ()=>testLettre(String.fromCharCode(76)));
document.getElementById(String.fromCharCode(77)).addEventListener("click", ()=>testLettre(String.fromCharCode(77)));
document.getElementById(String.fromCharCode(78)).addEventListener("click", ()=>testLettre(String.fromCharCode(78)));
document.getElementById(String.fromCharCode(79)).addEventListener("click", ()=>testLettre(String.fromCharCode(79)));
document.getElementById(String.fromCharCode(80)).addEventListener("click", ()=>testLettre(String.fromCharCode(80)));
document.getElementById(String.fromCharCode(81)).addEventListener("click", ()=>testLettre(String.fromCharCode(81)));
document.getElementById(String.fromCharCode(82)).addEventListener("click", ()=>testLettre(String.fromCharCode(82)));
document.getElementById(String.fromCharCode(83)).addEventListener("click", ()=>testLettre(String.fromCharCode(83)));
document.getElementById(String.fromCharCode(84)).addEventListener("click", ()=>testLettre(String.fromCharCode(84)));
document.getElementById(String.fromCharCode(85)).addEventListener("click", ()=>testLettre(String.fromCharCode(85)));
document.getElementById(String.fromCharCode(86)).addEventListener("click", ()=>testLettre(String.fromCharCode(86)));
document.getElementById(String.fromCharCode(87)).addEventListener("click", ()=>testLettre(String.fromCharCode(87)));
document.getElementById(String.fromCharCode(88)).addEventListener("click", ()=>testLettre(String.fromCharCode(88)));
document.getElementById(String.fromCharCode(89)).addEventListener("click", ()=>testLettre(String.fromCharCode(89)));
document.getElementById(String.fromCharCode(90)).addEventListener("click", ()=>testLettre(String.fromCharCode(90)));
