const ar = [];
const ar1 = [1,2,3,4];
ar.push(ar1);
ar.push("abc");
ar.push(...ar1);  //Spread operator - spreads the containing of the item (array ar1[] in our case )

const ar10 = [1,2,3,4,5];
const str = ar10.join("_") // Функция join переводит все элементы в одну строку конкатенируя все ее элементы. ("Делиметр") - знак разделения между элементов массива , можн ставить любой.
                           // .join('seporator) ; seporator - то чем (какими знака  ми) будут разделены элементы строки (;,_:\~| итд.)
function getRandomNumber(min,max){

    min = Math.trunc(min);
    max = Math.trunc(max);

    return min + Math.trunc(Math.random() * (max - min+1));  //  min минимальное число, (max - min) - доступный диапозон
}

// --// for (let i = 0 ; i<10 ; i++ ){
// --//     console.log(getRandomNumber(0,3));
// --// }


function getRandomMatrix(rows, columns, min, max) {    //Получение случайной матрицы , рандом кол рядов и колонок

const matrix = [];


for(let i = 0 ; i < rows ; i++){
    matrix.push([]);             
    for (let j=0 ; j < columns ; j++) {

        matrix[i].push(getRandomNumber(min,max));
    }

}

return matrix;

} 



const matrix = getRandomMatrix(3, 4, 0, 1);
console.log(matrix);

 function matrixTransp(matrix){

newMatrix




return newMatrix }

let arr1 = [[],[],[]];
arr1[1]=[1,2];
arr1[1][0]=4;
console.log(arr1);

