let userInput: unknown;
let userName: string;

userInput = 5;
userInput = 'Max';

//works with unknown
if (typeof userInput === 'string') {
    userName = userInput;
}
