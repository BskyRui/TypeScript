// public: 公有属性，都可以访问到
// protected: 在类里、子类里可以访问，类的外部无法访问
// private: 私有属性，只能在自身使用，子类和类的外部无法使用

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
