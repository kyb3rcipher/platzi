// Global Scope
let greeting = 'Hello World';

function greet() {
    console.log(greeting);
    //let greeting = 89;
}

greet();


// Local Scope
function greet() {
    let greetMessage = "Hello World";
    console.log("Greeting from function: ", greetMessage);
}

greet();
console.log(greetMessage);