// var
// let 块级作用域
for (let i = 0; i < 10; i++) {
    setTimeout(function() {
        console.log(i);
    }, i * 100);
}

// const 常量
const h = 'ssss';
// h = 'aaaa';  

// 解构 展开
let ipt: [number, number] = [0, 1];
function f([first, second]: [number, number]) {
    console.log(first, second);
}

f(ipt)

let [fir, ...other] = [1, 2, 3, 4];
// 1 [ 2, 3, 4 ]
console.log(fir, other);

// 对象解构
// e({ a, b }?: { a: string; b?: number; }): void
function e({a, b = 0} = {a: ''}): void {

}
e({a: 'yes'});
e();

// 数组展开
let arr = ['a', 'b', 'c'];
let otherArr = ['d', 'e'];
console.log([...arr, ...otherArr]);

// 对象展开
let info = {
    name: 'lr',
    age: 22,
    height: 172,
};

let newInfo = {
    ...info,
    name:  'LR'
};
console.log(newInfo);