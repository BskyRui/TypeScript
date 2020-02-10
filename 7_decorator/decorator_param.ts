// 原型（类），方法名，参数所在位置
function paramDecorator(target: any, method: string, paramIndex: number): any {
    console.log(target, method, paramIndex);
}

class TestParam {
    getInfo(@paramDecorator name: string, age: number) {
        console.log(name, age);
    }
}

const testParam = new TestParam();
