// Declaring class
class User {};

// Create class instance
const newUser = new User();

class Profile {
    // methods
    greeting() {
        return "Hello";
    }
};

const profile1 = new Profile();
console.log(profile1.greeting());
const profile2 = new Profile();
console.log(profile2.greeting());

// Constructor
class Developer {
    constructor() {
        console.log("New developer");
    }

    greeting() {
        return "Hello";
    }
}

const kyb3r = new Developer();

// This
class Worker {
    constructor(name) {
        this.name = name;
    }
    speak() {
        console.log(`Hello ${this.name}`);    // Template literals
    }
}

const worker1 = new Worker("Juan");
worker1.speak();

// Setter and getters
class Worker2 {
    // constructor method
    constructor(name, age) {
        this.name = name;
        this.age = age;

        console.log("Work declaration two");
    }
    greeting() {
        return "Hello";
    }
    speak() {
        console.log(`${this.greeting()} ${this.name}`);
    }

    get youAge() {
        return this.age;
    }
    set youAge(ageNumber) {
        this.age = ageNumber;
    }
}

const worker2 = new Worker2("Pepe", 17);
console.log(worker2.youAge);
worker2.youAge = 18;
console.log(worker2.youAge);