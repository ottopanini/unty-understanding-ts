const userName = 'max';
// userName = 'Maximilian';

let age = 30;
age = 29;

// const add = (a: number, b: number = a) => a + b;
//
// console.log(add(2, 5));
//
// const printOutput: (a: number|string) => void = output => console.log(output);
//
// printOutput(add(5));

const button = document.querySelector<HTMLButtonElement>('button');
if (button) {
    button.addEventListener('click', event => {
        console.log(event);
    });
}

const hobbies = ['Sports', 'Cooking'];
const activeHobbies = ['Hiking', ...hobbies];

// activeHobbies.push(hobbies[0], hobbies[1]);
// activeHobbies.push(...hobbies);

const person = {
    name: 'Max',
    age: 30
};

const newPerson = {...person};

const add = (...numbers: [number, number, number]) => {
    return numbers.reduce((acc, cur) => acc + cur, 0);
}

const addedNumbers = add(5, 10, 2);
console.log(addedNumbers);
