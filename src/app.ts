class Department {
    name: string = 'DEFAULT';

    constructor(n: string) {
        this.name = n;
    }

    //ts safe this context
    describe(this: Department) {
        console.log('dep: ' + this.name);
    }
}

let department = new Department('Accounting');
// console.log(department);
department.describe();

const accountingCopy = { name: 'with name works -> signature', describe: department.describe };
accountingCopy.describe(); // now works
