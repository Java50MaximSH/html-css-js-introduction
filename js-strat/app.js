// let num;
// num = 4 ;
// num= 5.49;
// //num = Math.floor(num); //целое чило, отбрасывает дробную часть в сторону Уменьшения 
// //num=Math.trunc(num);  // Тоже целое чило, но просто отбрасывает дробную часть
// //num=Math.ceil(num); // целое чило, отбрасывает дробную часть в Больш сторону 
// num=Math.round(num);//!! округляет в большую от  0.5 И в меньшую от 0.49
// num **=2; // num=num**2 степень 
// console.log(num);

// //String
// let str= +"123"+56 // "+" перед знчением строки "123" переводит тип значения в тип Число  

// // boolean
// let res1 = true + true; // = 2  (true по умолчанию = 1 ; false = 0 )
// let res2 = true && false;
// let res3 = -123 && 256; // см тетрадь
// let res4 = "123">"9" // flase
// let res5 = "123"> 9 // true 

// let a = Math.trunc(0.5);
// console.log(a);

//HW 11

//  -1-

let number =12345;

function getDigitSum(number) {
   let sum=0;

   do {sum += number%10; 
       number=Math.floor(number/10) ;      
}
while(number>0);
return sum;

//console.log(sum);
};

//getDigitSum(number);
console.log(getDigitSum(number));


 //-2-
 

 let str= "9000/((10+20)**2)";

function computeExpression(str) {
      return eval(str);

}
console.log(computeExpression(str));
 
//console.log(eval(str));

 // -3-

let num = -12345;

 function reverse(number){

number=number>0 ? number: number*-1 ; 

    let newNumb =""; 

do{
    newNumb+=number%10;
    number= Math.floor(number/10);
}
while(number!=0);
let a="-";

newNumb=number>0 ? newNumb :newNumb*-1;

 return newNumb;


}

console.log(reverse(num));


