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