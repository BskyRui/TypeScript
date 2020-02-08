// public  允许在类外使用
// private 允许在在类内使用
// protected 允许在类内和子类中使用

class Person {
    private name: string;

    constructor(name: string) {
        this.name = name;
    }

    getName() {
        return this.name;
    }
}

// 简写
class PersonNew {
    constructor(public name: string) {}
}

class Teacher extends Person {
    constructor(public age: number) {
        // call super class
        super('LR');
    }
}
