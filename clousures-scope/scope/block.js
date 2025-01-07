function fruits() {
    if (true) {
        var fruitVAR = "Apple";           // Function scope.
        let fruitLET = "Kiwi";           // Block scope.
        const fruitCONSTANT = "Banana"; // Block scope.

        console.log(fruitLET);
        console.log(fruitCONSTANT);
    }

    console.log(fruitVAR);
    // console.log(fruitLET);
    // console.log(fruitCONSTANT);
}

fruits();