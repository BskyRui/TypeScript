
abstract class Animal {
    abstract say(): void
    eat(): void {
        console.log('hello');
    }
}

class Cat implements Animal {
    
    say(): void {

    }

    eat() {

    }
}

abstract class Dog extends Animal {

}

// let d = new Dog();
// d.eat();