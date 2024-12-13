class Rocket {
    constructor (name, model) {
        this.name = name;
        this.model = model;
    }

    describe() {
        console.log(`I am a rocket ${this.name} my mode is ${this.model}`);
    }
}

const rocket1 = new Rocket("Falcon", 9);
console.log(rocket1);