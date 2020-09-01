abstract class Department {
    protected employees: string[] = [];
    static fiscalYear = 2010;

    constructor(protected readonly id: string, public name: string = 'DEFAULT') {}

    //ts safe this context
    abstract describe(this: Department): void;

    addEmploywee(employee: string) {
        this.employees.push(employee);
    }

    static createEmployee(name: string) {
        return {
            name
        };
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

    describe(): void {
        console.log('IT Dep');
    }
}

class AccountingDepartment extends Department {
    private lastReport: string;
    private static instance: AccountingDepartment;

    get recentReport() {
        if (this.lastReport) {
            return this.lastReport;
        }
        throw new Error('no report found.');
    }

    set recentReport(val: string) {
        if (!val) {
            throw new Error('report expected');
        }
        this.addReport(val);
    }

    describe() {
        console.log('Accounting Dep with id:' + this.id);
    }

    private constructor(id: string, private reports: string[]) {
        super(id, 'Accounting');
        this.lastReport = reports[reports.length - 1];
    }

    static getInstance() {
        if (!AccountingDepartment.instance) {
            AccountingDepartment.instance =  new AccountingDepartment('2', []);
        }
        return AccountingDepartment.instance;
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

const employee1 = Department.createEmployee('Max');
console.log(employee1, Department.fiscalYear);


const itDepartment = new ITDepartment('1', ['Max']);
// console.log(department);
itDepartment.describe();

itDepartment.addEmploywee('Max');
itDepartment.addEmploywee('Manu');

itDepartment.describe();
itDepartment.printEmployeeInfo();

console.log(itDepartment);

const accounting = AccountingDepartment.getInstance();
const accounting2 = AccountingDepartment.getInstance();
accounting.recentReport = 'first';
accounting.addReport('second Report');
accounting.addEmploywee('Max'); //should not be saved
accounting.addEmploywee('Manu');
accounting.printReports();
accounting.describe();

console.log(accounting, accounting2);
// const accountingCopy = { name: 'with name works -> signature', describe: department.describe };
// accountingCopy.describe(); // now works
