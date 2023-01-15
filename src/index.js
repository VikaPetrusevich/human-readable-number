

//console.log(toReadable(125));

module.exports = function toReadable(number) {
    const numberArray = [...number.toString()];
    if (numberArray.length === 1) {
        let numberText = onlyNumber(numberArray[0]);
        return numberText;
    }
    if (numberArray.length === 2) {
        if (numberArray[0] === '1') {
            let result = numberForTens(number.toString());
            return result;
        }
    else {
        let numberText = decimalNumber(numberArray[0]);
        let numberText2 = onlyNumber(numberArray[1]);
        if (numberText2 != 'zero') {
            let result = numberText + ' ' + numberText2;
            return result;
        }
        else {
            return numberText;
        }
    }
}
if (numberArray.length === 3) {
    let numberOne = hundredthNumber(numberArray[0]);
    let numberTwo = decimalNumber(numberArray[1]);
    let numberThree = onlyNumber(numberArray[2]);
    if (numberArray[1] === '1') {
        let result = numberOne + ' ' + numberForTens(numberArray[1]+numberArray[2]);
        return result
    }
    if (numberTwo != 'zero' && numberThree != 'zero') {
        let result = numberOne + ' ' + numberTwo + ' ' + numberThree;
        return result;
    }
   
    if (numberTwo != 'zero' && numberThree === 'zero') {
        let result = numberOne + ' ' + numberTwo;
        return result;
    }
    if (numberTwo === 'zero' && numberThree != 'zero') {
        let result = numberOne + ' ' + numberThree;
        return result;
    }
    if (numberTwo === 'zero' && numberThree === 'zero') {
        let result = numberOne;
        return result;
    }
    
}
}



function decimalNumber(digit) {
    switch (digit) {
        case '0':
            return 'zero';
        case '2':
            return 'twenty';
        case '3':
            return 'thirty';
        case '4':
            return 'forty';
        case '5':
            return 'fifty';
        case '6':
            return 'sixty';
        case '7':
            return 'seventy';
        case '8':
            return 'eighty';
        case '9':
            return 'ninety';
    }
}

function onlyNumber(value) {
    switch (value) {
        case '0':
            return 'zero';
        case '1':
            return 'one';
        case '2':
            return 'two';
        case '3':
            return 'three';
        case '4':
            return 'four';
        case '5':
            return 'five';
        case '6':
            return 'six';
        case '7':
            return 'seven';
        case '8':
            return 'eight';
        case '9':
            return 'nine';
    }
}

function hundredthNumber(numeric) {
    switch (numeric) {
        case '1':
            return 'one hundred';
        case '2':
            return 'two hundred';
        case '3':
            return 'three hundred';
        case '4':
            return 'four hundred';
        case '5':
            return 'five hundred';
        case '6':
            return 'six hundred';
        case '7':
            return 'seven hundred';
        case '8':
            return 'eight hundred';
        case '9':
            return 'nine hundred';
    }
}

function numberForTens(tally) {
    switch (tally) {
        case '10':
            return 'ten';
        case '11':
            return 'eleven';
        case '12':
            return 'twelve';
        case '13':
            return 'thirteen';
        case '14':
            return 'fourteen';
        case '15':
            return 'fifteen';
        case '16':
            return 'sixteen';
        case '17':
            return 'seventeen';
        case '18':
            return 'eighteen';
        case '19':
            return 'nineteen';
    }
}