// Variables
var a;           // declaration.
var b = "b";    // declaration and assignation.
b = "bb";       // reassignation.
var a = "aa"    // redeclaration.

// Global Scope (cualquier variable que se encuentran en el documento pasan a ser vairables globales y se instacian en el objecto window)
var fruit = "Apple";    // Global.

console.log(fruit);

function bestFruit() {
    console.log(fruit);
}

bestFruit();

function countries() {
    country = "Mexico"; // Global automatic.
    console.log(country);
}

countries();
console.log(country);