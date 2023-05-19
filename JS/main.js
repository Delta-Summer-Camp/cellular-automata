let ctx;
let xNode, yNode;
let mouseButton;

function init() {
    let canvas = document.getElementById("myCanvas");
    ctx = canvas.getContext("2d");

    ctx.fillStyle = "#00FF00";
    ctx.fillRect(10, 10, 80, 180);

    ctx.beginPath();
    ctx.moveTo(150, 200);
    ctx.lineTo(400, 100);
    ctx.strokeStyle = "#508000";
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(150, 300, 130, 0, 2 * Math.PI);
    ctx.strokeStyle = "#A0B0FF";
    ctx.stroke();

    xNode = document.getElementById("x");
    yNode = document.getElementById("y");

    canvas.addEventListener("mousedown", mouseDown);
    canvas.addEventListener("mouseup", mouseUp);
    canvas.addEventListener("mousemove", mouseMove);
}

function mouseDown() {
    mouseButton = true;
}

function mouseUp() {
    mouseButton = false;
}

function mouseMove(ev) {
    if (mouseButton) {
        xNode.innerText = ev.offsetX;
        yNode.innerText = ev.offsetY;

        ctx.beginPath();
        ctx.arc(ev.offsetX, ev.offsetY, 1, 0, 2 * Math.PI);
        ctx.strokeStyle = "red";
        ctx.stroke();
    }
}