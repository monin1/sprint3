/* Sound
---------------------------------------------*/


window.onload = function() {
    audio.play();
    audio.loop = true;
    audio.volume = 0.5;
}

function setVolume() {
    audio.volume = document.getElementById("sound").value/10;
}

function playSound(){
    var click = document.getElementById("clicksound");
    click.play();
}

function setClickOn() {
    clicksound.volume = 1;
}

function setClickOff() {
    clicksound.volume = 0;
}
