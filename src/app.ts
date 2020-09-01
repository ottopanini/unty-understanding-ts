class Department {
    protected employees: string[] = [];

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
    private lastReport: string;

    get recentReport() {
        if (this.lastReport) {
            return this.lastReport;
        }
        throw new Error('no report found.');
    }

    constructor(id: string, private reports: string[]) {
        super(id, 'Accounting');
        this.lastReport = reports[reports.length - 1];
    }

    addEmploywee(employee: string) {
        if (employee === 'Max') {
            return;
        }

        this.employees.push(employee);
    }

    addReport(text: string) {
        this.reports.push(text);
        this.lastReport = text;
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

const accounting = new AccountingDepartment('2', []);
console.log(accounting.recentReport);
accounting.addReport('second Report');
accounting.addEmploywee('Max'); //should not be saved
accounting.addEmploywee('Manu');
accounting.printReports();

console.log(accounting);
// const accountingCopy = { name: 'with name works -> signature', describe: department.describe };
// accountingCopy.describe(); // now works
