class HttpAdapter {
    constructor(type) {
        this.name = type;
    }

    get() {
        throw error("Method not implement.");
    }

    post() {
        throw error("Method not implement.");
    }

    put() {
        throw error("Mehotd not implement.");
    }

    delete() {
        throw error("Method not implement.");
    }
}

class HttpAdapterFactory {
    makeAdapter() {
        throw error("Method not implement.");
    }
}

class Express extends HttpAdapter {
    constructor() {
        super("Express")
    }

    get() {
        console.log(`get Method for ${this.name}`);
    }

    post() {
        console.log(`post Method for ${this.name}`);
    }

    put() {
        console.log(`put Method for ${this.name}`);
    }

    delete() {
        console.log(`delete Method for ${this.name}`);
    }
}

class ExpressFactory extends HttpAdapterFactory {
    makeAdapter() {
        return new Express();
    }
}

class Fastify extends HttpAdapter {
    constructor() {
        super("Express")
    }

    get() {
        console.log(`get Method for ${this.name}`);
    }

    post() {
        console.log(`post Method for ${this.name}`);
    }

    put() {
        console.log(`put Method for ${this.name}`);
    }

    delete() {
        console.log(`delete Method for ${this.name}`);
    }
}

class FastifyFactory extends HttpAdapter {
    makeAdapter() {
        return new Fastify();
    }
}

function appFactory(factory) {
    const car = factory.makeCar();
    car.showCost();
}

appFactory(new ExpressFactory());
appFactory(new FastifyFactory());