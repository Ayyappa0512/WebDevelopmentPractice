
var ele = document.querySelectorAll('.drum');
// .addEventListener('click', function  (){
//     console.log();
//     playSound(event.key);
// })

for(var i=0; i<ele.length;i++){
    ele[i].addEventListener('click', function (){
        var key = this.innerText;
        console.log(key);
        playSound(key);
        buttonAnimation(key);
    })
}

function buttonAnimation(buttonKey){
    var activeButton = document.querySelector("."+buttonKey);
    activeButton.classList.add("pressed");

    setTimeout(function (){
        activeButton.classList.remove("pressed")
    }, 200)
}

document.addEventListener('keydown', function (event){
    console.log(event.key);
    playSound(event.key);
    buttonAnimation(event.key);
})

function playSound(key){
    switch(key){
        case 'w': 
            var wSound = new Audio('./sounds/tom-1.mp3');
            wSound.play();
            break;
        case 'a':
            var aSound = new Audio('./sounds/tom-2.mp3'); 
            aSound.play();
            break;
        case 's':
            var sSound = new Audio('./sounds/tom-3.mp3');
            sSound.play();
            break;
        case 'd':
            var dSound = new Audio('./sounds/tom-4.mp3'); 
            dSound.play();
            break;
        case 'j':
            var jSound = new Audio('./sounds/crash.mp3'); 
            jSound.play();
            break;
        case 'k':
            var kSound = new Audio('./sounds/snare.mp3'); 
            kSound.play();
            break;
        case 'l':
            var lSound = new Audio('./sounds/kick-bass.mp3'); 
            lSound.play();
            break;
        default:
            alert("un matched key", key);
            break;
    }
}