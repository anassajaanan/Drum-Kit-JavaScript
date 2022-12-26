let buttons = document.querySelectorAll('button');
let sounds = [
    "crash.mp3",
    "kick-bass.mp3",
    "snare.mp3",
    "tom-1.mp3",
    "tom-2.mp3",
    "tom-3.mp3",
    "tom-4.mp3"
];
let keys = ["w", "a", "s", "d", "j", "k", "l"]


for (let i = 0; i < buttons.length; i++) {
    let button = buttons[i];
    button.addEventListener('click', function () {
        let audio = new Audio('sounds/' + sounds[i]);
        audio.play();
        animationButton(i);
    })
    document.addEventListener('keydown', function (e) {
        console.log(e.key)
        let index = keys.indexOf(e.key);
        let audio = new Audio('sounds/' + sounds[index]);
        audio.play();
        animationButton(index);
    })
}

function animationButton(index) {
    let key = keys[index];
    let activeButton = document.querySelector("." + key);
    activeButton.classList.add("pressed");
    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 100);
}




