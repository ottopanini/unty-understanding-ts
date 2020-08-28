const person = {
    name: 'Maximilian',
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    role: [2, 'author']
}

// both accepted
person.role.push('admin');
person.role[1] = 10;

let favoriteActivities: string[];
favoriteActivities = ['Sports'];

console.log(person.name); // error

for (const hobby of person.hobbies) {
    console.log(hobby.toLocaleUpperCase());
}
