// 1. Copying an array
const originalArray = [1, 2, 3, 4, 5];
const copyOfArray = [...originalArray];

console.log(originalArray);
console.log(copyOfArray);

console.log('\n');
// 2. Combining arrays
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const combineArray = [...array1, ...array2];

console.log(array1);
console.log(array2);
console.log(combineArray);


console.log('\n');
// 3. Creating arrays with additional elements
const baseArray = [1, 2, 3];
const arrayWithAdditionalElement = [...baseArray, 4, 5, 6];

console.log(baseArray);
console.log(arrayWithAdditionalElement);

console.log('\n');
// 4. Pass elements to function
function sum(number1, number2, number3) {
    return number1 + number2 + number3;
}

//sum(1, 2, 3);
const numbers = [1, 2, 3];
const result = sum(...numbers);

console.log(result);

console.log('\n');
//[...] spread operator
console.log([...numbers]);