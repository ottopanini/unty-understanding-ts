const userName = 'Maximilian';
console.log(userName);

const button = document.querySelector<HTMLButtonElement>('button');

// evt listener comment should be readable in src file only
button.addEventListener('click', () => {
    console.log('Clicked!');
});
