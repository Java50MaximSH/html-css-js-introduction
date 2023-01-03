//  -1-

let number =12345;

function getDigitSum(number) {
   let sum=0;   //  number = Math.trunc(Math.abs(number))

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

   // res= eval(str);
   // return res;   

}
console.log(computeExpression(str));
 
//console.log(eval(str));

 // -3-

let num = -12345;

 function reverse(number){                    //abs???????????

number=number>0 ? number: number*-1 ; 

    let newNumb =""; 

do{
    newNumb+=number%10;
    number= Math.floor(number/10);
}
while(number!=0);
//let a="-";

newNumb=number>0 ? newNumb :newNumb*-1;

 return newNumb;


}

console.log(reverse(num));