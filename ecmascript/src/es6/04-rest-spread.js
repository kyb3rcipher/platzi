// Object destructuring involves extracting the properties of an object into variables.

// Array destructuring
let fruits = ["Apple", "Banana", "Orange"];
let [a, b] = fruits;
console.log(a, b, fruits[2]);

// Object destructuring
let user = { username: "kyb3rcipher", age: 17 };
let { username, age } = user;
console.log(username, user.age);

// Spread operator (propagation)
let person = { name: "Kyb3r", age: 17 };
let country = "Mexico";

let data = { id: 1, ...person, country };
console.log(data);

// Rest
function sum(number1, ...values) {
    console.log(values);
    console.log(number1 + values[0]);
    return number1 + values[0];
}
sum(1, 1, 2, 3);