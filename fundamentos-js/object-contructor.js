/*const person = {
    Person(name, age, address) {
        this.name = name;
        this.age = age;
        this.address = address;
    },

    name: "Kyb3r Cipher",
    age: 17,
    address: {
        street: "Old San Juan",
        number: 15,
        cp: '00908'
    },
    
    greet() {
        console.log(`Hello, my name is ${this.name}`);
    }
};*/

function Person(name, age, address) {
    this.name = name;
    this.age = age;
    this.address = address;
};

const person1 = new Person("Kyb3r Cipher", 17, {
    street: "Old San Juan",
    number: 15,
    cp: '00908'
});

console.log(person1);


const person2 = new Person("Diego Perez", 38, {
    street: "San Juan",
    number: 15,
    cp: '00908'
});

console.log(person2);

// Add new propiety or method
Person.prototype.phone = 787;

Person.prototype.sayHello = function() {
    console.log(`Hello ${this.name}`);
};

console.log(person1.phone);
person2.sayHello();