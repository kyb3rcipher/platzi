// Block Scope
{
    let greeting = "Hello World";   // ONLY IN THE BLOCK: let and const
    console.log("Greeting from side of block: ", greeting);
    var lang = "Spanish";
}

console.log("Languge outside of block; ", lang);
console.log(greeting);