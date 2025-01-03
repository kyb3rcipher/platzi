/*
Notes:
En JS el ambito de las variables tiene un comportamiento por defecto estatico. Esto quiere decir que se determina en tiempo de compilación y no de ejecución, a ésto se le llama ámbito léxico.
NO IMPORTA desde donde se llame a la funcion, siempre va a dar como resultado el primer valor que se le definio a una variable.
*/
const age = 17;

function printAge() {
    console.log(age);
}

function mainApp() {
    const age = 18;

    printAge();
}

mainApp();