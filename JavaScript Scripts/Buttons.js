function chooseAnswer(answer) {
    if (answer == "red") {
        blueToRed();
    } else {
        redToBlue();
    }
}

function redToBlue() {
    document.getElementById("redImg").src = "assets\images\blue.jpg";
}

function blueToRed() {
    document.getElementById("blueImg").src = "assets\images\red.jpg";
}