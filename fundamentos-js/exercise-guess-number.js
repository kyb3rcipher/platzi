const number = Math.floor(Math.random() * 10 + 1);
console.log(`This is the number: ${number}`)

const playerNumber = parseInt(
    prompt('Enter a number:')
);

if (playerNumber === number) {
    alert('You guess the number crack!')
} else if (playerNumber < number) {
    alert('The number is too lower')
} else if (playerNumber > number) {
    alert('The number is too bigger')
}