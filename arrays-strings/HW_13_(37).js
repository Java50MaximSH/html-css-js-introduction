////1////

function randomNumber(min, max) {
    min = Math.trunc(min);
    max = Math.trunc(max);
    return min + Math.trunc(Math.random() * (max - min + 1));

}


function getArray(longG, min, max) {
    const randomArray = [];
    for (let i = 0; i < longG; i++) {
        randomArray.push(randomNumber(min, max));
    }
    return randomArray;

}

const array = getArray(4, 0, 1);

function getHtmlUl(array) {
    let text = "<ul class='list_class'>"
    for (let i = 0; i < array.length; i++) {
        let color = array[i] ? "<div class='White'>" : "<div class='Black'>";
        text += "<li class='item_class'>" + color + "</div></li>";
    }
    text += "</ul>"
    return text;
}

const getHtmlUll = getHtmlUl(array);
console.log(getHtmlUll);


//// 2 ////



function matrixX(raw, column) {
    const matrix = [];
    for (let i = 0; i < raw; i++) {
        matrix.push([]);
        for (let j = 0; j < column; j++) {
            matrix[i].push(randomNumber(0, 1));
        }
    }
    return matrix;
}

let matrixXx = matrixX(3, 5);


// console.log(matrixXx);
// console.log(matrixXx.length);

function matrixTransp(matrixXx) {
    const matrixTransp = [];

    for (let i = 0; i < matrixXx[0].length; i++) {
        matrixTransp.push([]);
        for (let j = 0; j < matrixXx.length; j++) {
            matrixTransp[i].push(matrixXx[j][i]);
        }
    }
    return matrixTransp;
}

matrixTranspP = matrixTransp(matrixXx);
console.log(matrixTranspP);