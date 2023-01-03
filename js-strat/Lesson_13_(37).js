function myParseInt(str, base) {
    base = base || 10;
    let res = NaN;
    const firstIndex = str[0] === "-" ? 1 : 0;    // Если str=== "-" то index = 1 и getCode(str[index] начинается не с 0-го (а с 1-го) символа 
    let code = 1;                                 //чтобы вошел в цикл
    let index = firstIndex;
    code = getCode(str[index], base);              // если вдруг res > base (т.к тогда res=-1), цикл while его не видет и переходит index++
    if (code >= 0) { //
        res = code;
        index++;
    }

    while (index < str.length && code >= 0) {

        code = getCode(str[index], base);           //получает значение res , если -1 (если symbol не из системы исчеслеия ) получается (code < 0) - То выходит из цикла while и будет первоначальное зачение res = NaN
        if (code >= 0) {
            res = res * base + getCode(str[index]);
        }
        index++;

    }

    if (firstIndex === 1) {
        res = -res;
    }

    return res;
}


function getCode(symbol, base) {
    let res = -1;
    symbol = symbol.toLowerCase();
    const codeA = 'a'.charCodeAt(); // 'a' = 97 
    if ((symbol <= '9' && symbol >= '0' || symbol >= 'a' && symbol <= 'z')) {

        res = symbol <= '9' ? +symbol : symbol.charCodeAt() - codeA + 10;
        if (res >= base) {
           res= -1;

        }
        return res;
    }
}
    console.log(myParseInt("3", 2));



    function myToString(number,base) {
        let res = "";

        base = base || 10;
        const sign = number < 0 ? "-" : "";
        const inegerPart = Math.trunc (Math.abs(number));
        const fractionPart = number - integerPart;
        res = convertIntegerPart (integerPart, base)+ '.' +
        convertFractionPart(fractionPart, base); 
       
        return sign + res;
        
        }

function convertIntegerPart (number , base ) {

            let res = ""

            do{
                const digit = number % base;
                const symbol = getSymbol(digit);
                res = symbol + res;
                number = Math.trunc(number / base) 
            } while(number);
            return res;
        }
        
function convertFractionPart (number, base , precision) {
          let res = "";
          precision = precision || 7
          let count = 0;
          let intPart;
          do {

          number *= base;
          intPart = Math.trunc(number);
          if (intPart !=0) {
            if (count == precision && intPart > base /2) {
                intPart++
            }
            const symb = getSynbol(intPart);
            res +=symb;
            number = number - intPart;
                        }

             } while()
}

        