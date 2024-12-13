//find()
const multipliesOf5 = [5, 10, 15, 20];

const firstNumberGreeterTan10 = multipliesOf5.find(number => number > 10);

console.log(multipliesOf5);
console.log(firstNumberGreeterTan10);

//findIndex()
const randomNumbers = [6, 14, 27, 56, 40];
const firstIndex = randomNumbers.findIndex(number => number > 50);

console.log(randomNumbers);
console.log(firstIndex);