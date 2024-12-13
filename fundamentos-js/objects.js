/*
Deifnition: data structure

object {
    propiety: value,
    otherPropiety: value,

    method: function () {
        // code
    }
}
*/

const person = {
    name: "Kyb3r Cipher",
    age: 17,
    address: {
        streeth: "Av. Lollipoop",
        number: 457,
        cp: 34198
    },

    greet() {
        console.log(`Hello, my name is ${person.name}`);
    }
};