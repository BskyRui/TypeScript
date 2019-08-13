interface Square {
    color: string
    area: number
}

interface SquareConfig {
    color?: string
    width?: number
}

function createSquare(config: SquareConfig): Square {
    let square = { color: 'black', area: 1000};
    if (config.color) {
        square.color = config.color;
    }

    if (config.width) {
        square.area = config.width * config.width;
    }
    return square;
}

let testSquare = createSquare({color: 'gray'});

// readonly
interface Point {
    readonly x: number
    readonly y: number
}

let pos: Point = { 
    x: 10, 
    y: 20
};
// pos.x = 20
console.log(pos);

// 函数类型
interface SearchFunction {
    (source: string, subString: string): boolean
}
let search: SearchFunction = function(src, sub) {
    let res = src.search(sub);
    return res > -1;
}

// 可索引的类型
interface StringArr {
    readonly [index: number]: string
}

let arr: StringArr = ['Lee', 'Job'];
let s: string = arr[0];
// arr[0] = '22';
