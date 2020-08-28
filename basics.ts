// const person: {
//     name: string;
//     age: number;
//     hobbies: string[];
//     role: [number, string];
// } = {
//     name: 'Maximilian',
//     age: 30,
//     hobbies: ['Sports', 'Cooking'],
//     role: [2, 'author']
// }
// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

enum Role {
    ADMIN,
    READ_ONLY,
    AUTHOR
}
const person = {
    name: 'Maximilian',
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    role: Role.ADMIN
}

if (person.role === Role.ADMIN) console.log('never reached');
// if (person.role === 'READ_ONLY') console.log('never reached');

// both accepted
// person.role.push('admin');
// person.role[1] = 10;

let favoriteActivities: string[];
favoriteActivities = ['Sports'];

console.log(person.name); // error

for (const hobby of person.hobbies) {
    console.log(hobby.toLocaleUpperCase());
}

