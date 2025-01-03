// Before ECMAScript6
/*
// Class father
function Person(name) {
    this.name = name;
}

Person.prototype.greet = function() {
    console.log("Hello I am " + this.name);
}

// Herency: Class son
function Developer(name) {
    this.name = name;
}

Developer.prototype = Object.create(Person.prototype);

Developer.prototype.writeCode = function(cofee) {
    if (cofee) console.log("I am working with coffee");
    else console.log("I need coffee please!");
}
*/

// After ES6
class Person {
    constructor(name) {
        this.name = name;
    }

    greet() {
        console.log(`Hi I'm ${this.name}`);
    }
}

class Developer extends Person {
    constructor(name) {
        super(name);    // Calls the constructor of the parent class.
    }

    writeCode(coffee) {
        console.log(coffee ? "I am working with coffee" : "I need coffee please!");
    }
}

var kyb3r = new Developer("Kyb3r");
kyb3r.greet();
kyb3r.writeCode(false);