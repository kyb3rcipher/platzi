// How to create an Array?

// 1. new Array() or Array()
const fruits = Array('apple', 'banana', 'orage');
console.log(fruits);

const justOneNumber = new Array(12);
console.log(justOneNumber);

const numbers = Array(1, 2, 3, 4, 5);
console.log(numbers);

// 2. Array literal syntax
const oneNumber = [4];
console.log(oneNumber);

const emptyArray = [];
console.log(emptyArray);

const sports = ['soccer', 'tennis', 'rugby'];
console.log(sports);

const recipeIngredients = [
    'Flour',
    true,
    2,
    {
        ingredient: 'Milk',
        quantity: '1 cup'
    }
];
console.log(recipeIngredients);
console.log(recipeIngredients[3].quantity);

// Mutability
console.log('\n----- Mutability -----');
fruits.push('watermelon');
console.log(fruits);

// Inmutability
const newFruits = fruits.concat(['grape', 'kiwi']);
console.log(newFruits);

// Check if is array
const isArray = Array.isArray(fruits);
console.log(isArray);

// Practical exercise
const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 8, 10];
let sum = 0;
for (number of numbersArray) {
    sum += number;
}
console.log(sum);