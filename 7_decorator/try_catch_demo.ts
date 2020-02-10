const user: any = undefined;

function catchError(msg: string) {
    return function(target: any, key: string, descriptor: PropertyDescriptor) {
        const fn = descriptor.value;
        descriptor.value = () => {
            try {
                fn();
            } catch (e) {
                console.log(msg);
            }
        };
    };
}

class User {
    @catchError('user.name is not exist')
    getName() {
        return user.name;
    }

    @catchError('user.age is not exist')
    getAge() {
        return user.age;
    }
}

const u = new User();
u.getAge();
