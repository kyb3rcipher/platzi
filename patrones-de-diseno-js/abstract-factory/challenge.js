// STEP 1 - Abstract classes
class CPU {
    setSeries(series) {
        throw new Error("Method not implemented.");
    }
}

class Memory {
    setCapacityInGB(number) {
        throw new Error("Method not implemented.");
    }
}

class Display {
    setResolution(resolution) {
        throw new Error("Method not implemented.");
    }
}

// STEP 2 - Concrete classes
class PhoneCPU extends CPU {
    setSeries(series) {
        console.log(`[PHONE] Setting CPU series: ${series}`);
    }
}

class LaptopCPU extends CPU {
    setSeries(series) {
        console.log(`[LAPTOP] Setting CPU serie: ${series}`);
    }
}

class TabletCPU extends CPU {
    setSeries(series) {
        console.log(`[Tablet] Setting CPU serie: ${series}`);
    }
}

class PhoneMemory extends Memory {
    setCapacityInGB(capacity) {
        console.log(`[PHONE] Setting memory capacity: ${capacity} GB`);
    }
}

class LaptopMemory extends Memory {
    setCapacityInGB(capacity) {
        console.log(`[LAPTOP] Setting memory capacity: ${capacity} GB`);
    }    
}

class TabletMemory extends Memory {
    setCapacityInGB(capacity) {
        console.log(`[TABLET] Setting memory capacity: ${capacity} GB`);
    }    
}

class PhoneDisplay extends Display {
    setResolution(resolution) {
        console.log(`[PHONE] Setting display resolution: ${resolution}`);
    }
}

class LaptopDisplay extends Display {
    setResolution(resolution) {
        console.log(`[LAPTOP] Setting display resolution: ${resolution}`);
    }
}

class TabletDisplay extends Display {
    setResolution(resolution) {
        console.log(`[TABLET] Setting display resolution: ${resolution}`);
    }
}

// STEP 3 - Abstract Factory class
class DeviceAbstractFactory {
    makeCPU() {
        throw new Error('Method not implemented!');
    }
    makeMemory() {
        throw new Error('Method not implemented!');
    }
    makeDisplay() {
        throw new Error('Method not implemented!');
    }
}

// STEP 4 - Concrete factories
class PhoneFactory extends DeviceAbstractFactory {
  makeCPU() {
    return new PhoneCPU();
  }
  makeMemory() {
    return new PhoneMemory();
  }
  makeDisplay() {
    return new PhoneDisplay();
  }
}

class LaptopFactory extends DeviceAbstractFactory {
  makeCPU() {
    return new LaptopCPU();
  }
  makeMemory() {
    return new LaptopMemory();
  }
  makeDisplay() {
    return new LaptopDisplay();
  }
}

class TabletFactory extends DeviceAbstractFactory {
  makeCPU() {
    return new TabletCPU();
  }
  makeMemory() {
    return new TabletMemory();
  }
  makeDisplay() {
    return new TabletDisplay();
  }
}

// USE
function appAbstractFactory({factory, cpuSeries, capacity, resolution}) {    
    if (!factory) {
        console.log('---No factory provided ---');
        return '---No factory provided ---'
    }

    const cpu = factory.makeCPU();
    const memory = factory.makeMemory();
    const display = factory.makeDisplay();

    cpu.setSeries(cpuSeries);
    memory.setCapacityInGB(capacity);
    display.setResolution(resolution);
}

function makeFactory(deviceType) {
    const devices = {
        'phone': PhoneFactory,
        'laptop': LaptopFactory,
        'tablet': TabletFactory,
    }
    const Devices = devices[deviceType];
    return new Devices();
}

// USE
appAbstractFactory({
    factory: makeFactory('phone'),
    cpuSeries: 'Snapdragon 690',
    capacity: 16,
    resolution: '2560x1440',
});

appAbstractFactory({
    factory: makeFactory('laptop'),
    cpuSeries: 'Intel Core i9',
    capacity: 500,
    resolution: '1920x1080',
});

appAbstractFactory({
    factory: makeFactory('tablet'),
    cpuSeries: 'ARM Cortex-A53',
    capacity: 64,
    resolution: '1280x720',
});