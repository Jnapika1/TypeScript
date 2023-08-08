"use strict";
const number1 = document.getElementById('num1');
const number2 = document.getElementById('num2');
const button = document.querySelector('button');
const numResults = [];
const textResults = [];
function add(num1, num2) {
    if (typeof num1 === 'number' && typeof num2 === 'number') {
        return num1 + num2;
    }
    else if (typeof num1 === 'string' && typeof num2 === 'string') {
        return num1 + ' ' + num2;
    }
    return (+num1 + +num2);
}
function printResult(resultObj) {
    console.log(resultObj.val);
}
button.addEventListener('click', () => {
    const num1 = number1.value;
    const num2 = number2.value;
    const result = add(+num1, +num2);
    numResults.push(result);
    const stringResult = add(num1, num2);
    textResults.push(stringResult);
    // console.log(result);
    // console.log(stringResult);
    printResult({ val: result, timestamp: new Date() });
    console.log(numResults, textResults);
});
// console.log(add(1,6));
// console.log(add('1', '5'));
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("It worked!");
    }, 1000);
});
myPromise.then(result => {
    console.log(result.split('w'));
});
