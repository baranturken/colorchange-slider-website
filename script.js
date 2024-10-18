function makeblack() {
    var canvas = document.getElementById("canvas1");
    canvas.style.backgroundColor = "Black";
}

function changeColor() {
    var canvas = document.getElementById("canvas1");
    var colorinput = document.getElementById("clr");
    canvas.style.backgroundColor = colorinput.value;
}

function doSquare() {
    var sliderinput = document.getElementById("sldr");
    var len = sliderinput.value;
    var canvas = document.getElementById("canvas1");
    var context = canvas.getContext("2d");
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.fillStyle = "yellow";
    context.fillRect(10, 10, len, len);
    context.fillRect(parseInt(len) + 20, 10, len, len);
    context.fillRect(len * 3, 10, len, len);
}
