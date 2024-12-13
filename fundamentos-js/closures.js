/*
Closure: access to external function variables
Lexic ambit: 
*/

function outerFunction() {
    let outerVariable = "I am from outer funcion";

    function innerFunction() {
        console.log(outerVariable);
    }

    return innerFunction;
}

const closuerExample = outerFunction();
closuerExample();

function createCounter() {
    let count = 0;

    return function () {
        count++;
        console.log(count);
    }
}

const counterA = createCounter();
counterA();
counterA();

const counterB = createCounter();
counterB();

function outer() {
    let message = "Hello, ";

    function inner(name) {
        console.log(message + name);
    }

    return inner;
}

const clouseA = outer();
const clouseB = outer();

clouseA("Elon");
clouseB("Bob");