let arr = ["./sounds/tom-1.mp3", "./sounds/tom-2.mp3", "./sounds/tom-3.mp3", "./sounds/tom-4.mp3", "./sounds/snare.mp3","./sounds/crash.mp3","./sounds/kick-bass.mp3"]
let pair = {
    "w":"./sounds/tom-1.mp3",
    "a":"./sounds/tom-2.mp3",
    "s":"./sounds/tom-3.mp3",
    "d":"./sounds/tom-4.mp3",
    "j":"./sounds/snare.mp3",
    "k":"./sounds/crash.mp3",
    "l":"./sounds/kick-bass.mp3",
}
function player(music){
    let audio = new Audio(music);
    audio.play();
}
for (let i = 0; i < document.querySelectorAll(".drum").length; i++){
    document.getElementsByTagName("button")[i].addEventListener("click", function () {
        player(arr[i]);
    })
}
document.addEventListener("keypress", function(theEvent) {
if (theEvent.key in pair){
    player(pair[theEvent.key])
}
}) 
