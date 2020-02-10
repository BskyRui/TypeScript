// new (...args: any[]) => any  ->  参数是any的数组，返回 any
// 扩展 constructor
function testDecorator<T extends new (...args: any[]) => any>(constructor: T) {
    return class extends constructor {
        name = 'LI';
    };
}

@testDecorator
class TestDecorator {
    name: string;
    constructor(name: string) {
        console.log(1);
        this.name = name;
        console.log(2);
    }
}

const t = new TestDecorator('RUI');
console.log(t.name);

// 给类装饰额外的函数
function demoDecorator() {
    return function<T extends new (...args: any[]) => any>(constructor: T) {
        return class extends constructor {
            name = 'LIRUI';
            getName() {
                return this.name;
            }
        };
    };
}

const Demo = demoDecorator()(
    class {
        name: string;
        constructor(name: string) {
            this.name = name;
        }
    }
);

const d = new Demo('LR');

console.log(d.getName());
