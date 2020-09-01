interface AddFn {
    (a: number, b: number): number;
}

let add: AddFn;
add = (n1: number, n2: number) => {
    return n1 + n2;
}


interface Named {
    readonly name: string;
}
interface Greetable extends Named {
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
