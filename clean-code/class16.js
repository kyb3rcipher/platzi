// Before ECMAScript 6
function Person(name) {
    this.name = name;
}

Person.prototype.greet = function() {
    return "Hello I'm " + this.name;
};

var person = new Person("Kyb3r");
console.log(person.name);

// After ES6
class Cat {
    constructor(cat) {
        this.name = cat;
    }

    greet() {
        console.log(`Hi I'm ${this.name}`);
    }
}

var larky = new Cat("Larky");
console.log(larky.name);
larky.greet();