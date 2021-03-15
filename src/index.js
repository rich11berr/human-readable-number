let simpleNum = function (number) {
    switch(number) {
        case 1: return 'one';
        case 2: return 'two';
        case 3: return 'three';
        case 4: return 'four';
        case 5: return 'five';
        case 6: return 'six';
        case 7: return 'seven';
        case 8: return 'eight';
        case 9: return 'nine';
        case 0: return '';
    }
}
let teenNum = function (number) {
    switch(number) {
        case 10: return 'ten';
        case 11: return 'eleven';
        case 12: return 'twelve';
        case 13: return 'thirteen';
        case 14: return 'fourteen';
        case 15: return 'fifteen';
        case 16: return 'sixteen';
        case 17: return 'seventeen';
        case 18: return 'eighteen';
        case 19: return 'nineteen';
    }
}
let tyNum = function (number) {
    switch(number) {
        case 2: return 'twenty';
        case 3: return 'thirty';
        case 4: return 'forty';
        case 5: return 'fifty';
        case 6: return 'sixty';
        case 7: return 'seventy';
        case 8: return 'eighty';
        case 9: return 'ninety';
    }
}
let hundredNum = function (number) {
    switch(number) {
        case 1: return 'one hundred';
        case 2: return 'two hundred';
        case 3: return 'three hundred';
        case 4: return 'four hundred';
        case 5: return 'five hundred';
        case 6: return 'six hundred';
        case 7: return 'seven hundred';
        case 8: return 'eight hundred';
        case 9: return 'nine hundred';
        case 0: return '';
    }
}

module.exports = function toReadable (number) {
    if(number === 0) {
        return 'zero';
    }
    if(number < 10) {
        return simpleNum(number);
    }
    if (number <= 19) {
        return teenNum(number);
    }
    if (number <= 99) {
        if(number % 10 === 0) {
            return (tyNum(Math.floor(number / 10)));
        }
        return (tyNum(Math.floor(number / 10) ) + ' ' + simpleNum(number % 10));
    }
    if (number <= 999) {
        if(number % 100 === 0) {
            return (hundredNum(Math.floor(number / 100)));
        }
        if(number % 100 <= 9) {
            return (hundredNum(Math.floor(number / 100)) + ' ' + simpleNum(number % 10));
        }
        if(number % 100 <= 19 && number % 100 >= 10) {
            return (hundredNum(Math.floor(number / 100)) + ' ' + teenNum(number % 100));
        }
        if(number % 10 === 0) {
            return hundredNum(Math.floor(number / 100)) + ' ' + tyNum((Math.floor((number % 100) / 10)))
        }
        return (hundredNum(Math.floor(number / 100)) + ' ' + tyNum((Math.floor((number % 100) / 10))) + ' ' + simpleNum(number % 10));
    }
}