// slide()
const animals = ['ant', 'bison', 'camel', 'dog', 'elephant'];
//                0      1        2        3      4
//                -5     -4       -3      -2     -1

console.log(animals.slice(2));
console.log(animals.slice(2, 4));
console.log(animals.slice(1, 5));

console.log(animals.slice(-2));
console.log(animals.slice(-5, -2));

console.log(animals.slice());   // Return original array.