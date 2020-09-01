interface Greetable {
    readonly name: string;

    greet(phrase: string): void;
}

class Person implements Greetable {
    age = 30;

    constructor(public name: string) {
    }

    greet(): void {
    }

}

let user1: Greetable;
user1 = new Person('max');

user1.greet('Hi there - I am');
