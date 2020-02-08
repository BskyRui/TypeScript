class Demo {
    private static instance: Demo;
    private constructor() {} // 外部不能访问构造函数

    static getInstance() {
        if (!this.instance) {
            this.instance = new Demo();
        }

        return this.instance;
    }
}

const demo1 = Demo.getInstance();
const demo2 = Demo.getInstance();
