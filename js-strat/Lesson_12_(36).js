let str = "123";
let num = +str;

let str1 ="123a";
let num1 =parseInt(str1)+10;

let str2 = "123.5";
let numInt = parseInt(str2);
let numFloat = parseFloat(str2);


str2 = "b.5";
numInt = parseInt(str2, 36); // 16 это система исчесления (по умолчанию десятичная)


 function myParseInt(str,base) {
    base = base || 10;
    let res = 0;
    for(let i=0 ; i<str.length ; i++){
 res = res * base +getCode(str[i]);
    }

    return res;  
}

function getCode(symbol) {
symbol = symbol.toLowerCase();

const CodeA ='a'.charCodeAt(); // 'a' = 97

const res = symbol<='9' ? +symbol : symbol.charCodeAt() - codeA +10; // b , b=98, 98 - 97 +10 = 11

return res; 
}


str1 = "ff";
str2 = "123";
let str22 = "Java";
let str3 = "123m";
let str4 = "123.5";
num = parseInt (str1, 16);
let myNum = myParseInt(str1,16);
num = parseInt(str2);
myNum = myParseInt(str2);
num =parseInt(str22,36);
myNum = myParseInt(str22,36);
num = parseInt(str3);
myNum = myParseInt(str3);
num = parseInt(str4);
myNum = myParseInt(str4);

let number = 255;
 str = "" + number;
str = number.toString(16);

function myToString(number,base) {
let res = "";
base = base || 10;
number = Math.trunc(Math.abs(number));

do{
const symbol = getSymbol( number % base, base)

}
while(number)




}

let num100 = 990500;
let str100 = num.toString();
let myStr100 = myToString(num100);
 str100 = 990500;
str100 = num.toString(36);
myStr100 = myToString(num100,36);

