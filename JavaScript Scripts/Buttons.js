var answered = false;

function redToBlue() {
    if (!answered) {
        document.getElementById("redImg").src = "assets\\images\\blue.jpg";
        answered = true;
    }
}

function blueToRed() {
    if (!answered) {
        document.getElementById("blueImg").src = "assets\\images\\red.jpg";
        answered = true;
    }
}