createBoard();

function createDiv() {
    const boardDiv = document.createElement('div');

    boardDiv.className = 'new-div';


    return boardDiv;
}

function createBoard() {
    const container = document.querySelector('.container');
    let myDivs = [];
    let numOfDivs = 256;

    for (i = 0; i < numOfDivs; i++)
    {
        myDivs.push(createDiv());
        container.appendChild(myDivs[i]);
    }
}

