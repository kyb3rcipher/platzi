// Pure functions
// 1. Return same input
// 2. Don't do side effect

/* Side effect (impure function)
    1. Modify global variables
    2. Modify function params
    3. Api/Http calls - request
    4. Print messages (console or code)
    5. DOM manipulation
    6. System information (date, time, info)
*/

// Pure function:
function sum(number1, number2) {
    return number1 + number2;
}

// Impure function: (side effect [4])
function sum(number1, number2) {
    console.log('Number 1: ' + number1);
    console.log('Number 2: ' + number2);
    return number1 + number2;
}

let total = 0;
function changeTotal(newTotal) {    // (side effect [1]).
    total = newTotal;
}

// Pure
function square(x) {
    return x * x;
}

function addTen(y) {
    return y + 10;
}

const number = 5;
const finalResult = addTen(square(number));
console.log(finalResult);