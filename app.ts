function add(n1: number, n2: number): number {
    return n1 + n1;
}

function printResult(num: number): void {
    console.log('Result ' + num);
}

function returnNothing(num: number): undefined {
    console.log('Result ' + num);

    //needed here
    return;
}

printResult(add(5, 12));

let combineValues: (a: number, b: number) => number;
combineValues = add;
// combineValues = printResult;

console.log(combineValues(8, 8));
