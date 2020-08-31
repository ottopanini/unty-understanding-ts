const userName = 'max';
// userName = 'Maximilian';

let age = 30;
age = 29;

const add = (a: number, b: number = 1) => a + b;

console.log(add(2, 5));

const printOutput: (a: number|string) => void = output => console.log(output);

printOutput(add(5));

const button = document.querySelector<HTMLButtonElement>('button');
if (button) {
    button.addEventListener('click', event => {
        console.log(event);
    });
}
