//

let size = 15;

class Node {

    constructor(x, y) {

        this.x = x;
        this.y = y;
        this.parent;
        this.object;
        this.cost;
    }

}

let startNode;
let endNode;


let nodes = new Array();

let table = document.getElementById('game');

function createTable() {

    for (let i = 0; i < size; i++) {
        let row = document.createElement('tr');
        let _nodes = new Array();
        for (let a = 0; a < size; a++) {
            let n = new Node(i, a);
            _nodes.push(n);

            let obj = document.createElement('td');
            obj.setAttribute('class', 'square temp');
            obj.setAttribute('id', `${i},${a}`);
            obj.innerHTML = `${i},${a}`;
            obj.setAttribute('onclick', 'elementClicked(this.id)');
            n.object = obj;
            row.appendChild(obj);
        }
        nodes.push(_nodes);
        table.appendChild(row);
    }
}

let clickedStart = false;
let clickedEnd = false;
let isRunning = false;



function elementClicked(id) {

    if (!clickedStart) {

        let _t = document.getElementById(id);

        for (let row = 0; row < nodes.length; row++) {
            for (let col = 0; col < nodes[row].length; col++) {
                nodes[row][col].object.classList.remove('temp');
                nodes[row][col].object.classList.add('after');
            }
        }
        for (let row = 0; row < nodes.length; row++) {
            for (let col = 0; col < nodes[row].length; col++) {

                if (nodes[row][col].object == _t) {
                    startNode = nodes[row][col];
                    startNode.object.style.backgroundColor = 'rgb(67, 255, 34)';
                    clickedStart = true;
                    return
                }
            }
        }



    } else if (!clickedEnd) {



        let _t = document.getElementById(id);

        if (!(_t == startNode.object)) {

            for (let row = 0; row < nodes.length; row++) {
                for (let col = 0; col < nodes[row].length; col++) {
                    nodes[row][col].object.classList.remove('after');
                    nodes[row][col].object.classList.add('a');
                }
            }


            for (let row = 0; row < nodes.length; row++) {
                for (let col = 0; col < nodes[row].length; col++) {

                    if (nodes[row][col].object == _t) {
                        endNode = nodes[row][col];
                        endNode.object.style.backgroundColor = 'rgb(255, 0, 0)';
                        clickedEnd = true;
                        return
                    }
                }
            }
        }
    }



}

createTable();