class Animal {
    constructor(name, type) {
        this.name = name;
        this.type = type;
    }

    emitSound() {
        console.log("The animal emit a sound");
    }
};

class Dog extends Animal {
    constructor(name, type, model) {
        super(name, type);
        this.model = model;
    }

    // Overwrite method
    emitSound() {
        console.log("The dog barks");
    }

    run() {
        console.log(`The ${this.name} are running`);
    }
}

// Create new dog **instance**
const dog1 = new Dog("Toby", "Dog", "Pug");
delete dog1.model;

dog1.newMethod = () => {
    console.log("This is a method");
};

console.log(dog1);
dog1.newMethod();

// Add to constructor
Dog.prototype.newMethod2 = () => {
    console.log("This is a second new method");
};

dog1.newMethod2();