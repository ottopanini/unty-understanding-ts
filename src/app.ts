class Department {
    name: string = 'DEFAULT';

    constructor(n: string) {
        this.name = n;
    }
}

let department = new Department('Accounting');
console.log(department);
