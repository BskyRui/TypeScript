// 普通方法, target 对应的是类的 prototype
// 静态方法, target 对应的是类的 constructor

function getNameDecorator(
    target: any,
    key: string,
    descriptor: PropertyDescriptor
) {
    console.log(target, key);
    descriptor.writable = false;
    descriptor.value = function() {
        return 'hello';
    };
}

class TestDescriptor {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    @getNameDecorator
    getName() {
        return this.name;
    }
}

const testDescriptor = new TestDescriptor('LR');

// read only
// testDescriptor.getName = () => {
//     return '222';
// };
console.log(testDescriptor.getName());
