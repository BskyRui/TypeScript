interface People {
    firstName: string
    lastName: string
}

function hello(p: People) {
    return `Hello ${p.firstName} ${p.lastName}`;
}

let user:People = {
    firstName: 'Lee',
    lastName: 'R'
};

console.log(hello(user));