let hello = "Hello";
let word = "Word";

// Before ECMAScript6
let epicPhrase = hello + " " + word + "!";
console.log(epicPhrase);

// After ECMAScript6 [Template literals]
let epicPhrase2 = `${hello} ${word}!`;
console.log(epicPhrase2);

// Multi-line strings
let lorem = "This is a string\n" + "This is another line";

// ECMAScript6 with template literals
let lorem2 = `This is a epic phrase
this is a continuation of the epic phrase!`;
console.log(lorem);
console.log(lorem2);