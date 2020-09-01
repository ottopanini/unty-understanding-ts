type Person = {
    name: string;
    age: number;

    greet(phrase: string): void;
}

let user1: Person;

user1 = {
    name: 'max',
    age: 30,
    greet(phrase: string) {
        console.log(phrase + ' ' + this.name);
    }
}

user1.greet('Hi there - I am');

class Customer implements Person {
     age: number = 1;
     name: string = 'ert';

     greet(): void {
     }

 }
