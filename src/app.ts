interface Admin {
    name: string;
    priveleges: string[];
};

interface Employee {
    name: string;
    startDate: Date;
}

interface ElevatedEmployee extends Admin, Employee {

}

const e1: ElevatedEmployee = {
    name: 'Max',
    priveleges: ['create-server'],
    startDate: new Date()
}


