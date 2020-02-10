// 装饰器的顺序从下到上

function testDecorator(constructor: any) {
    constructor.prototype.getName = () => {
        console.log('decorator');
    };
}

function testDecorator1(flag: boolean) {
    // 装饰器传参
    if (flag) {
        console.log(`flag is ${flag}`);
    }
    return function(constructor: any) {
        constructor.prototype.getName = () => {
            console.log('decorator');
        };
    };
}

@testDecorator
class Test {}

const test = new Test();
(test as any).getName();

testDecorator1(true);
class Test2 {}
