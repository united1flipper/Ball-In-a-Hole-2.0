//inits external js files
let import1 = document.createElement('script');
import1.src = "js/Model/Track.js";
document.head.appendChild(import1);
let import2 = document.createElement('script');
import2.src = "js/Model/Note.js";
document.head.appendChild(import2);
let import3 = document.createElement('script');
import3.src = "js/Model/Timer.js";
document.head.appendChild(import3);
let import4 = document.createElement('script');
import4.src = "js/View/Listeners.js";
document.head.appendChild(import4);
let import5 = document.createElement('script');
import5.src = "js/View/NoteVisual.js";
document.head.appendChild(import5);

//global volume 0 - 1
let globalVolume = 0.1;
//variables for tabs (if opened)
let settingsOpened = false;
let tracksOpened = true;
let isRecording = false;
//list of tracks
let tracks = [];
//list of available sounds
let sounds = 
[
    new Audio("./sounds/boom.wav"),
    new Audio("./sounds/clap.wav"),
    new Audio("./sounds/hihat.wav"),
    new Audio("./sounds/kick.wav"),
    new Audio("./sounds/openhat.wav"),
    new Audio("./sounds/ride.wav"),
    new Audio("./sounds/snare.wav"),
    new Audio("./sounds/tink.wav"),
    new Audio("./sounds/tom.wav")
];
//types of available notes
let noteTypes = 
[
    "&#9833;","&#9834;","&#9835;",
    "&#9836;","&#9837;"
];
