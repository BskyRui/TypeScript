class User {
    fullName: string
    firstName: string
    lastName: string

    constructor(first: string, last: string) {
        this.firstName = first;
        this.lastName = last;
        this.fullName = first + ' ' + last;
    }
}

interface People {
    firstName: string
    lastName: string
}

function sayHello(p: People) {
    return `Hello ${p.firstName} ${p.lastName}`;
}

// User具备接口People中的属性
let user1 = new User('Lee', 'R');
console.log(sayHello(user1));

