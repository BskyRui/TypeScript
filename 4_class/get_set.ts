const token = 'sec';

class Employee {
    private _fullName: string
    static type: string = "TAG"

    get fullName(): string {
        return this._fullName;
    }

    set fullName(newName: string) {
        if (token === 'sec') {
            this._fullName = newName;
        } else {
            console.log('ERROR: set failed.');
        }
    }
}

let empl = new Employee();
empl.fullName = 'JOB';

if (empl.fullName) {
    console.log(empl.fullName, Employee.type);
}