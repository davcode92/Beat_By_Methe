//ici je recupere juste mon background dans une variable "bg" pour travailer avec plutard.
var bg=document.getElementById("particles-js");

//voici comment on ajoute un évenement sur notre page avec 2 parametres: "une action" et 
//une "callback function(une fonction qui se réalise lorsqu'on clique sur l'évenement en question)" 
document.addEventListener("keydown",function(event){
    bg.style.backgroundColor = getRandomColor();
    //à chaque fois que je vais appuyer sur une touche cette dernière sera enregistrée.
    var key=event.key;                
    //une fonction qui va jouer de la musique en fonction de la lettre que je vais appuyer.
    playMusic(key);
    console.log(event);
});
//ici je vais créer la fonction "getRandomColor()" qui va nous renvoyer des couleurs alléatoires.
function getRandomColor(){
    var letters ="0123456789ABCDEF";
    var color="#";
    for(var i=0;i<6;i++){
      color = color + letters[Math.floor(Math.random()*letters.length)];
    }
    return color;
}

//ici je vais créer la fonction "playMusic(key)" avec switch qui va jouer de la musique en fonction de la lettre que je vais appuyer.
function  playMusic(key){
    switch(key){
        case "a":
            var audio  = new Audio("Kick1.wav");
            audio.play();
            break;
            case "b":
            var audio  = new Audio("kick.mp3");
            audio.play();
            break;
            case "c":
            var audio  = new Audio("kick2.mp3");
            audio.play();
            break;
            case "d":
            var audio  = new Audio("Clap1.wav");
            audio.play();
            break;
            case "e":
            var audio  = new Audio("Kick1.wav");
            audio.play();
            break;
            case "f":
            var audio  = new Audio("kick.mp3");
            audio.play();
            break;
            case "g":
            var audio  = new Audio("kick2.mp3");
            audio.play();
            break;
            case "h":
            var audio  = new Audio("Clap1.wav");
            audio.play();
            break;
            case "i":
            var audio  = new Audio("Clap1.wav");
            audio.play();
            break;
            case "j":
            var audio  = new Audio("Kick1.wav");
            audio.play();
            break;
            case "k":
            var audio  = new Audio("kick.mp3");
            audio.play();
            break;
            case "l":
            var audio  = new Audio("kick2.mp3");
            audio.play();
            break;
            case "m":
            var audio  = new Audio("Clap1.wav");
            audio.play();
            break;
            break;
            case "n":
            var audio  = new Audio("Clap1.wav");
            audio.play();
            break;
            case "o":
            var audio  = new Audio("Clap1.wav");
            audio.play();
            break;
            case "p":
            var audio  = new Audio("Kick1.wav");
            audio.play();
            break;
            case "q":
            var audio  = new Audio("kick.mp3");
            audio.play();
            break;
            case "r":
            var audio  = new Audio("kick2.mp3");
            audio.play();
            break;
            case "s":
            var audio  = new Audio("Clap1.wav");
            audio.play();
            break;
            break;
            case "t":
            var audio  = new Audio("Clap1.wav");
            audio.play();
            break;
            case "u":
            var audio  = new Audio("Clap1.wav");
            audio.play();
            break;
            case "v":
            var audio  = new Audio("Kick1.wav");
            audio.play();
            break;
            case "w":
            var audio  = new Audio("kick.mp3");
            audio.play();
            break;
            case "x":
            var audio  = new Audio("kick2.mp3");
            audio.play();
            break;
            case "y":
            var audio  = new Audio("Clap1.wav");
            audio.play();
            break;
            case "z":
            var audio  = new Audio("Clap1.wav");
            audio.play();
            break;
     }
}



















