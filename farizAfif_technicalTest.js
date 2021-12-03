//Looping, conditional --> "Open", "Source", "OpenSource"
function result(number) {
    for (let i = 1; i <= number; i++) {
        if (i % 3 === 0 && i % 7 === 0) {
            console.log('OpenSource');
        } else if (i % 3 === 0) {
            console.log('Open');
        } else if (i % 7 === 0) {
            console.log('Source');
        } else {
            console.log(i);
        }
    }

    return;
}
result(99);

//==========================================================================================//

// Looping, conditional/parsing ---> menghitung vokal dari string
function countVow(string) {
    let sum = 0;
    const vowel = 'AIUEOaiueo';

    for (let i = 0; i < string.length; i++) {
        if (vowel.indexOf(string[i]) !== -1) {
            sum++;
        }
    }

    return sum;
}
console.log(countVow('Test Lower and UPPER CASE'));

//==========================================================================================//

//Conditional, olah list, rekursif, parsing
function maxNumber(testNumber) {
    number = testNumber.slice();

    if (number.length == 1) {
        return number[0];
    }

    if (number[0] < number[1]) {
        number.splice(0, 1);
    } else {
        number.splice(1, 1);
    }

    return maxNumber(number);
}
console.log(maxNumber([1, 2, 4, 170, 21, 31, 40, 100, -100, 3]));
