/*
Since 2015, JavaScript has introduced a new way of creating 'templates' to generate objects.
To be more assimilated to other programming languages ​​such as Java, this is known as sweet code.

This is the same as contructor function:

class Person {
    constructor (name, age, address) {
        this.name = name;
        this.age = age;
        this.address = address;
    }

    sayHello() {
        console.log(`Hello my name is: ${this.name}`);
    }
}

=== The same as:
function Person(name, age, address) {
    this.name = name;
    this.age = age;
    this.address = address;
    
    this.sayHello = function() {
        console.log(`Hello my name is: ${this.name}`);
    };
}
*/
class Person {
    constructor (name, age, address) {
        this.name = name;
        this.age = age;
        this.address = address;
    }

    sayHello() {
        console.log(`Hello my name is: ${this.name}`);
    }
}

const person1 = new Person("Kyb3r Cipher", 17, {
    street: "Old San Juan",
    number: 15,
    cp: '00908'
});

person1.sayHello();