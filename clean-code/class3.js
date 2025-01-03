// Before ES6
//var name = "Kyb3r";

// Modern JS ES6+ (recomendation: avoid the use of var)
//let name = "Kyb3r";
// constant: const PI = 3.14159;


// var: Does not respect block scopes
/*
var age = 17;

{
    console.log("Value inside of block: ", age);
    var age = 18;
}

console.log("Value outsite of block: ", age);
age *= 2;
console.log("Changed value: ", age);
*/

// let: Does not respect block scopes
/*
let age = 17;

{
    console.log("Value inside of block: ", age);
    let age = 18;
}

console.log("Value outsite of block: ", age);
age *= 2;
console.log("Changed value: ", age);
*/

// const: Contact the value never change!
/*
const PI = 3.14159;
PI = 3.1416;
console.log(PI);
*/