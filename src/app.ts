const userName = 'Maximilian';
console.log(userName);

const button = document.querySelector<HTMLButtonElement>('button')!;
button.addEventListener('click', () => {
    console.log('Clicked!');
});
