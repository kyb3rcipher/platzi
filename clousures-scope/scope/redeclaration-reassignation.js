var firstName;  // undefined.
firstName = "Kyb3r";    // assignation.
console.log(firstName);

var lastName = "David"; // declaration and assignation.
lastName = "Cipher";    // reassignation.
console.log(lastName);

var secondName = "Cifra";
var secondName = "Cifre";   // redeclaration and reassignation;
console.log(secondName);


// Let
let fruit = "Apple";    // declarate and assignate.
fruit = "Kiwi"; // reassignate.
console.log(fruit);

// NOT POSSIBLE WITH let: let fruit = "Banana";   // redeclarate and reassignate.

// Const
const animal = "Cat";   // declare and assign.
// NOT POSSIBLE CHANGE THE constANT VARIABLE: animal = "Dog"; // reassign.
console.log(animal);

const vehicles = [];
vehicles.push("🏎️");
console.log(vehicles);

vehicles.pop();
console.log(vehicles);