// Data type: string

let string1 = 'Hello world'
let string2 = "JavaScript is cool"
let string3 = `${string1} ${string2}`   // with ` we can concatenate varibles
let string4 = string1 + ' ' + string2

console.log('String 1: ' + string1)
console.log('String 2: ' + string2)
console.log('String 3: ' + string3)
console.log('String 4: ' + string4)

let phrase = 'JavaScript is so cool'
console.log('The phrase length is: ' + phrase.length)
console.log('The phrase in lower: ' + phrase.toLowerCase())
console.log('The phrase in upper: ' + phrase.toUpperCase())
console.log('The phrase 9 first chars: ' + phrase.substring(0, 10))