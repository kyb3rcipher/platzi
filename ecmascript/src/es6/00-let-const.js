var name = "Kyb3r";
name = "Cipher";
console.log(name);

let animal = "Dog";
animal = "Cat";
console.log(animal);

const pi = 3.1519;
// pi = 3; - the reassination is not possible
console.log(pi);

const fruits = () => {
    if (true) { // handlebars start
        /*** BLOCK scope  start ***/
        
        var fruit1 = "Apple";   // function scope
        let fruit2 = "Kiwi";    // block scope
        const fruit3 = "Banana";    // block scope

        /*** BLOCK scope  end ***/
    } // handlebars end

    console.log(fruit1);
    console.log(fruit2);
    console.log(fruit3);
}
fruits();