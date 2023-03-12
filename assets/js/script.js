/* Plays background music */
let mySound = new Audio('beyond.mp3')
mySound.play()  
mySound.volume = 0.1;

function myFunction() {
    var x = document.getElementById("myDIV");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }