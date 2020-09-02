type Admin = {
    name: string;
    priveleges: string[];
};

type Employee = {
    name: string;
    startDate: Date;
}

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
    name: 'Max',
    priveleges: ['create-server'],
    startDate: new Date()
}


