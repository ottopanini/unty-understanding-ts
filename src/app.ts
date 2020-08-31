class Department {
    private employees: string[] = [];

    constructor(private id: string, public name: string = 'DEFAULT') {}

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
