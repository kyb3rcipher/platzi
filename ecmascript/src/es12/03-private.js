// Private methods
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
    #speak() {  // PRIVATE METHOD.
        console.log(`${this.greeting()} ${this.name}`);
    }

    get #youAge() { // PRIVATE METHOD.
        return this.age;
    }
    set #youAge(ageNumber) { // PRIVATE METHOD.
        this.age = ageNumber;
    }
}

const worker2 = new Worker2("Pepe", 17);
console.log(worker2.youAge);
worker2.youAge = 18;
console.log(worker2.youAge);