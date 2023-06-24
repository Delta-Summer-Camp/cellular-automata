const SIZE = 100;
const lineColor = "gray";
const cellColor = "blue";
const emptyCell = "white";
let cWinth, cHeight;
let ctx;
let xNode, yNode;
let mouseButton;
const gameData = [];

function init() {
    let canvas = document.getElementById("myCanvas");
    cWidth = canvas.width;
    cHeight = canvas.height;
    ctx = canvas.getContext("2d");

    initGameboard();

    for (var n = 0; n < SIZE; n++) {
        gameData[n] = new Array(SIZE);
    }
    xNode = document.getElementById("x");
    yNode = document.getElementById("y");

    canvas.addEventListener("mousedown", mouseDown);
    canvas.addEventListener("mouseup", mouseUp);
    canvas.addEventListener("mousemove", mouseMove);
}

function mouseDown(ev) {
    const X = getX(ev.offsetX);
    const Y = getY(ev.offsetY);
    if (gameData[X][Y] == 1) {  // if the cell is filled, clean it
        setCell(X, Y, emptyCell);
        gameData[X][Y] = null;
    } else {                    // fill the cell
        setCell(X, Y, cellColor);
        gameData[X][Y] = 1;
    }
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

// returns offsetX of the top left corner of the cell number X (0..SIZE-1)
function cellX(X) {
    return X * cWidth / SIZE;
}

// returns offsetY of the top left corner of the cell number Y (0..SIZE-1)
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