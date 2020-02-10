function fieldDecorator(target: any, key: string): any {
    // target[key] 是原型上的，不是实例上
    const descriptor: PropertyDescriptor = {
        writable: false
    };

    return descriptor;
}

class TestField {
    @fieldDecorator
    name = 'LR';
}

const testField = new TestField();
testField.name = 'lr';
console.log(testField.name);
