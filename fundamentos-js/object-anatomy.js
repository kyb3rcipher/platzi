const person = {
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
};

console.log(person.address.street);
person.greet();

person.phone = 787;

person.sayBye = () => { // anonymous function
    console.log("Bye");
};

console.log(person);

// Delete propiety or method
delete person.sayBye;

console.log(person);