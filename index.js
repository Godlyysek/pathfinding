//


let gameArea = [];

let size = 15;

let table = document.getElementById('game');

function createGame() {
    for (let row = 0; row < size; row++) {
        console.log(row)
        let currentRow = document.createElement('tr');
        currentRow.setAttribute('id', `${row}`);


        table.appendChild(currentRow);

        for (let col = 0; col < size; col++) {
            let currentCol = document.createElement('td');
            currentCol.setAttribute('id', `${row}${col}`);
            currentCol.setAttribute('class', 'square');
            // currentCol.innerHTML = `${row}${col}`;
            currentRow.appendChild(currentCol);
        }
    }
}

createGame();