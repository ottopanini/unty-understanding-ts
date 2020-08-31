class Department {
    name: string = 'DEFAULT';

    constructor(n: string) {
        this.name = n;
    }

    describe() {
        console.log('dep: ' + this.name);
    }
}

let department = new Department('Accounting');
// console.log(department);
department.describe();
