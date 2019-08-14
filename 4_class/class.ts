class Animal {
    name: string

    constructor(name: string) {
        this.name = name;
    }

    move(distance: number = 0) {
        console.log(`${this.name} moved distance ${distance}m`);
    }
}

class Snake extends Animal {
    private age: number
    public weight: number

    constructor(name: string) {
        super(name)
    }

    move(distance: number = 5) {
        console.log('Slithering...');
        super.move(distance);
    }
}

class Horse extends Animal {
    constructor(readonly name: string) {
        super(name)
    }

    move(distance: number = 45) {
        console.log('Galloping...');
        super.move(distance);
    }
}

let t = new Snake('Tom');
t.move();

let sam: Animal = new Horse('Sam');
sam.move(34);