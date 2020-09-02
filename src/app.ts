type Admin = {
    name: string;
    privileges: string[];
};

type Employee = {
    name: string;
    startDate: Date;
}

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
    name: 'Max',
    privileges: ['create-server'],
    startDate: new Date()
}

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;


function add(a: Combinable, b: Combinable) {
    if (typeof a === 'string' || typeof b ==='string')
        return a.toString() + b.toString();

    return a + b;
}

type UnknownEmployee = Employee | Admin;

function printEmployeeInformation(emp: UnknownEmployee) {
    console.log('Name: ' + emp.name);
    if ('privileges' in emp)
        console.log('Priviliges: ' + emp.privileges);

    if ('startDate' in emp)
        console.log('Start Date: ' + emp.startDate);
}

printEmployeeInformation(e1);
printEmployeeInformation({name: 'Manu', startDate: new Date()});

class Car {
    drive() {
        console.log('Driving...');
    }
}

class Truck {
    drive() {
        console.log('Driving a truck...');
    }

    loadCargo(amount: number) {
        console.log('Loading cargo ...' + amount);
    }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
    vehicle.drive();

    //evaluated based on constructor functions
    if (vehicle instanceof Truck)
        vehicle.loadCargo(1000);
}

useVehicle(v1);
useVehicle(v2);

interface Bird {
    type: 'bird';
    flyingSpeed: number;
}

interface Horse {
    type: 'horse';
    runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
    let speed;
    switch (animal.type) {
        case 'bird':
            speed = animal.flyingSpeed;
            break;
        case 'horse':
            speed = animal.runningSpeed;
            break;
    }

    console.log('Moving with speed: ' + speed);
}

moveAnimal({type: 'bird', flyingSpeed: 20});

const userINput = document.getElementById('user-input'); //: simply HTMLElement infered
if (userINput) {
    (userINput as HTMLInputElement).value = 'hi there!';
}

interface ErrorContainer {
    [prop: string]: string;
}

const errorBag: ErrorContainer = {};

