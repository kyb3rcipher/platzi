const greeting = function (name) {
    return `Hello, ${name}`;
}

// Arrow function
const newGreeting = (name) => {
    return `Hello, ${name}`;
}

//arrow function - implicit return
const newGreetingImplicit = name => `Hello, ${name}`;
const newGreetingImplicitWithTwoParamets = (name, lastName) => `Hello, I'm ${name} ${lastName}`;

// Lexcial biding
const finctionalCharacter = {
    name: 'Luke Skywalker',
    
    messageWithTradicionalFunction: function (message) {
        console.log(`${this.name} say: ${message}`);
    },

    messageWithArrowFunction: (message) => {
        console.log(`${this.name} say: ${message}`);
    }
};

finctionalCharacter.messageWithTradicionalFunction("May the force be with you");
finctionalCharacter.messageWithArrowFunction("May the force be w u");   // In the arrow function {this} does not work.