let mb1 = document.getElementById("mb1");
let music = document.getElementById("spoot");
music.style.display = "none";
var a = 0;
mb1.onclick = function() {
    if (a == 0) {
        music.style.display = "block";
        a = 1;
    } else {
        music.style.display = "none";
        a = 0;
    }
    
};