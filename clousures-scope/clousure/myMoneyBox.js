/*
function moneyBox(coins) {
    let saveCoins = 0;
    saveCoins += coins;
    console.log(`Money box: $${saveCoins}`);
}

moneyBox(5);
moneyBox(5);
*/

function moneyBox(coins) {
    let saveCoins = 0;

    function countCoins(coins) {
        saveCoins += coins;
        console.log(`Moneybox: $${saveCoins}`);
    }

    return countCoins;
}

const myMoneyBox = moneyBox();
myMoneyBox(5);
myMoneyBox(5);
myMoneyBox(10);

const moneyBoxDiana = moneyBox();
moneyBoxDiana(20);
moneyBoxDiana(5);
