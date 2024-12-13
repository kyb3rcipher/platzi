// Excplicit type casting
const string = '42'
const integer = parseInt(string)
console.log(integer, typeof integer)

const stringDecimal = '3.14'
const decimal = parseFloat(stringDecimal)
console.log(decimal, typeof decimal)

const stringBinary = '1010'
const binaryDecimal = parseInt(stringBinary, 2)
console.log(binaryDecimal, typeof binaryDecimal)

// Implicit type casting
const sum = '5' + 3
console.log(sum)

const sumWithBoolean = '3' + true
console.log(sumWithBoolean)

const sumWithNumber = 2 + true
console.log(sumWithNumber)

// If there is a string "+" it concatenates and if there is no string it adds
// boolean + number SUM
// number + string concatenates