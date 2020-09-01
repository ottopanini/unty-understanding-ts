class Department {
    private employees: string[] = [];

    constructor(private readonly id: string, public name: string = 'DEFAULT') {}

    //ts safe this context
    describe(this: Department) {
        console.log(`dep(${this.id}): ${this.name}`);
    }

    addEmploywee(employee: string) {
        this.employees.push(employee);
    }

    printEmployeeInfo() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}

class ITDepartment extends Department {
    constructor(id: string, public admins: string[]) {
        super(id, 'IT');
    }
}

class AccountingDepartment extends Department {
    constructor(id: string, private reports: string[]) {
        super(id, 'Accounting');
    }

    addEmploywee(employee: string) {
        if (employee === 'Max') {
            return;
        }

        super.addEmploywee(employee);
    }

    addReport(text: string) {
        this.reports.push(text);
    }

    printReports() {
        console.log(this.reports);
    }
}


const itDepartment = new ITDepartment('1', ['Max']);
// console.log(department);
itDepartment.describe();

itDepartment.addEmploywee('Max');
itDepartment.addEmploywee('Manu');

itDepartment.describe();
itDepartment.printEmployeeInfo();

console.log(itDepartment);

const accounting = new AccountingDepartment('2', ['initial Report']);
accounting.addReport('second Report');
accounting.addEmploywee('Max'); //should not be saved
accounting.addEmploywee('Manu');
accounting.printReports();

console.log(accounting);
// const accountingCopy = { name: 'with name works -> signature', describe: department.describe };
// accountingCopy.describe(); // now works
