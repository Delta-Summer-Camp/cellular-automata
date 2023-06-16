const SIZE = 10;
const lineColor = "gray";
let cellColor = "blue";
let cWinth, cHeight;
let ctx;
let xNode, yNode;
let mouseButton;

function init() {
    let canvas = document.getElementById("myCanvas");
    cWidth = canvas.width;
    cHeight = canvas.height;
    ctx = canvas.getContext("2d");

    initGameboard();

    /*
    ctx.fillStyle = "#00FF00";
    ctx.fillRect(10, 10, 80, 180);

    ctx.fillStyle = "#600000";
    ctx.fillRect(250, 110, 100, 100);

    ctx.beginPath();
    ctx.moveTo(150, 100);
    ctx.lineTo(130, 400);
    ctx.lineTo(200, 380);
    ctx.strokeStyle = "#508000";
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(150, 300, 130, 0, Math.PI);
    ctx.strokeStyle = "#A0B0FF";
    ctx.stroke();


    for (var i = 0; i < SIZE; i++) {
        ctx.beginPath();
        ctx.moveTo(100, 100 + (50 * i));
        ctx.lineTo(400, 100 + (50 * i));
        ctx.strokeStyle = "#A0B0FF";
        ctx.lineWidth = 5;
        ctx.stroke();
    }
    */
        
    xNode = document.getElementById("x");
    yNode = document.getElementById("y");

    canvas.addEventListener("mousedown", mouseDown);
    canvas.addEventListener("mouseup", mouseUp);
    canvas.addEventListener("mousemove", mouseMove);
}

function mouseDown(ev) {
    setCell(getX(ev.offsetX), getY(ev.offsetY), cellColor);
}

function mouseUp() {
}

function mouseMove(ev) {
    xNode.innerText = getX(ev.offsetX);
    yNode.innerText = getY(ev.offsetY);
}

function initGameboard() {
    // rows
    for (let i = 1; i < SIZE; i++) {
        ctx.beginPath();
        ctx.moveTo(0, (cHeight / SIZE) * i);
        ctx.lineTo(cWidth, (cHeight / SIZE) * i);
        ctx.strokeStyle = lineColor;
        ctx.stroke();
    }

    // columns
    for (let i = 1; i < SIZE; i++) {
        ctx.beginPath();
        ctx.moveTo((cWidth / SIZE) * i, 0);
        ctx.lineTo((cHeight / SIZE) * i, cHeight);
        ctx.strokeStyle = lineColor;
        ctx.stroke();
    }
}

// returns cell number in row
function getX(offsetX) {
    return Math.floor(offsetX * SIZE / cWidth);
}

// returns cell number in column
function getY(offsetY) {
    return Math.floor(offsetY * SIZE / cHeight);
}

// returs offsetX of the top left corner of the cell number X (0..SIZE-1)
function cellX(X) {
    return X * cWidth / SIZE;
}

// returs offsetY of the top left corner of the cell number Y (0..SIZE-1)
function cellY(Y) {
    return Y * cHeight / SIZE;
}

// set Cell (x,y) in color
function setCell(x, y, color) {
    let xSize = Math.floor(cWidth / SIZE);
    let ySize = Math.floor(cHeight / SIZE);
    ctx.fillStyle = color;
    ctx.fillRect(cellX(x)+1, cellY(y)+1, xSize-2, ySize-2);
}