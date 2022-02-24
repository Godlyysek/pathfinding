//


let gameArea = [];
//size of rows and columns
let size = 15;
//get the table element
let table = document.getElementById('game');


function createGame() {
    for (let row = 0; row < size; row++) {
        //create and change the row element
        let currentRow = document.createElement('tr');
        currentRow.setAttribute('id', `${row}`);
        //add row to table
        table.appendChild(currentRow);
        let tempArr = [];
        for (let col = 0; col < size; col++) {
            //create column and change them
            let currentCol = document.createElement('td');
            currentCol.setAttribute('id', `${row}${col}`);
            currentCol.setAttribute('class', 'square temp');
            currentCol.setAttribute('onclick', 'getClickedElement(this.id);');
            // currentCol.innerHTML = `${row}${col}`;
            //add column to row
            currentRow.appendChild(currentCol);

            tempArr.push(currentCol);
        }
        gameArea.push(tempArr);
    }

}


class Node {

    constructor(posX, posY) {
        this.distanceToEnd;
        this.distanceToStart;
        this.cost;
        this.x = posX;
        this.y = posY;
    }
}



createGame();

let nodes = assignNodes();

let start;
let end;

let startPos = [];
let endPos = [];

let wasClicked = false;
let wasClickedEnd = false;


function getClickedElement(id) {

    if (!wasClicked) {

        for (let i = 0; i < gameArea.length; i++) {
            for (let a = 0; a < gameArea[i].length; a++) {

                gameArea[i][a].classList.remove('temp');
                gameArea[i][a].classList.add('after');
            }
        }

        let clicked = document.getElementById(id);
        clicked.classList.remove('square');
        clicked.classList.remove('temp');
        clicked.classList.remove('after');
        clicked.classList.add('start-square');

        start = clicked;


        for (let x = 0; x < gameArea.length; x++) {
            if (gameArea[x].includes(start)) {
                startPos.push(x);
                startPos.push(gameArea[x].indexOf(start));
            }
        }
        console.log(startPos);

        wasClicked = true;

    } else if (!wasClickedEnd) {
        for (let i = 0; i < gameArea.length; i++) {
            for (let a = 0; a < gameArea[i].length; a++) {

                gameArea[i][a].classList.remove('after');
            }
        }

        let end = document.getElementById(id);
        end.classList.add('end');

        for (let x = 0; x < gameArea.length; x++) {
            if (gameArea[x].includes(end)) {
                endPos.push(x);
                endPos.push(gameArea[x].indexOf(end));
            }
        }
        console.log(endPos);

        wasClickedEnd = true;
    }
}


function startGame() {

    let open = [];
    let closed = [];

    open.push(nodes[startPos[0]][startPos[1]]);

    let currentPos = [open[0].x, open[0].y];

    if (a) {

    }

    let dS = distanceFromStartNode(startPos, currentPos);
    let dE = distanceFromEndNode(endPos, currentPos);

    open[0].cost = dS + dE;





}


function distanceFromStartNode(sPos, currPos) {
    let d = Math.round((Math.sqrt(Math.pow((currPos[0] - sPos[0]), 2) + Math.pow((currPos[1] - sPos[1]), 2)) * 1000), 0);
    return d;
}

function distanceFromEndNode(ePos, currPos) {
    let d = Math.round((Math.sqrt(Math.pow((currPos[0] - ePos[0]), 2) + Math.pow((currPos[1] - ePos[1]), 2)) * 1000), 0);
    return d;
}

function assignNodes() {
    let _nodes = [];

    for (let row = 0; row < gameArea.length; row++) {
        let _row = [];
        for (let col = 0; col < gameArea[row].length; col++) {
            let node = new Node(row, col);
            _row.push(node);
        }
        _nodes.push(_row);
    }

    return _nodes;
}