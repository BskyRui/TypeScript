interface ClockInterface {
    tick()
}

interface ClockConstructor {
    new (hour: number, minute: number): ClockInterface
}

function createClock(ctor: ClockConstructor, hour: number, minute: number): ClockInterface {
    return new ctor(hour, minute);
}

class DigitalClock implements ClockInterface {
    constructor(h: number, m: number) {}

    tick() {
        console.log('deep');
    }
}