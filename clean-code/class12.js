/*
Hosting: Es el proceso de mover las variables y las declaraciones hasta arriba del codigo (JS lo hace automaticamente al ejecutar el codigo antes de).

NOTES:
- De las 3 formas de declarar variables (let, const, var) sólo var tiene hoisting
- Hoisting sólo se aplica a la declaración de la variable no a la asignación
*/

var greet = "Hello";

(
    function() {
        console.log(greet);
        var greet = "Hi";
        console.log(greet);
    }
)();

/*
function greeting() {
    let greeting = "Hello World";
    console.log(greeting);
}

greeting();
*/