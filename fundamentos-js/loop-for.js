let list = ["eat", "sleep", "code", "repeat"];

console.log("Length: " + list.length);
console.log("**********");

// Normal for
/*for (let i = 0; i < list.length; i++) {
    console.log(list[i]);
}*/

// For [of]
/*for (item of list) {
    console.log(item);
}*/

/*
for in ----> objects
object: propiety = valor;
array, string = item;

for (variable in object) {
    // code
}
*/
const listOfGames = {
    nintendo: 1,
    xbox: 5,
    playstation: 9,
    pc: 3
};

/*for (game in listOfGames) {
    console.log(game);
}*/

for (game in listOfGames) { 
    console.log(`${game} : ${listOfGames[game]}`);
}