class Department {
    private id: string;
    private name: string = 'DEFAULT';
    private employees: string[] = [];

    constructor(id: string, n: string) {
        this.name = n;
        this.id = id;
    }

    //ts safe this context
    describe(this: Department) {
        console.log('dep: ' + this.name);
    }

    addEmploywee(employee: string) {
        this.employees.push(employee);
    }

    printEmployeeInfo() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}

let department = new Department('Accounting', '1');
// console.log(department);
department.describe();

department.addEmploywee('Max');
department.addEmploywee('Manu');

department.describe();
department.printEmployeeInfo();

// const accountingCopy = { name: 'with name works -> signature', describe: department.describe };
// accountingCopy.describe(); // now works
