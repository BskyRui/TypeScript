let isFlag:  boolean = true;
// number
let num: number = 20;
let hex: number = 0x14;
let binary: number = 0b10;
let octal: number = 0o24;

let s: string = 'heh';

// 数组
let list: number[] = [1,2,3];
// 泛型
let list2: Array<number> = [1, 2, 3];

// 元组 
let t: [string, number] = ['heh', 2];

// 枚举
enum Color {
    Red,
    Green,
    Black
}

let c: Color = Color.Black;
// Black
let cName: string = Color[2];

// any
let unknown: any = 'string';

// void -> null, undefined

let len: number = (unknown as string).length;