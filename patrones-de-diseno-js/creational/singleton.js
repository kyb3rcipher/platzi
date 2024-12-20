class Singleton {
    static instance = undefined;

    constructor(version) {
        this.version = this.version;
    }

    static getInstance(version) {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton(version);
        }

        return Singleton.instance;        
    }
}

function appSingleton() {
    const singleton1 = Singleton.getInstance("1.0");
    const singleton2 = Singleton.getInstance("2.0");

    console.log(singleton1 === singleton2);
}

appSingleton();