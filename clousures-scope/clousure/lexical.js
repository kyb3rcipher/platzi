// Clousure: permite acceder al scope de una funcion exterior desde una funcion interior. En JS los clausures se crean cada vez que una funcion es creada.
const myGlobal = 0;

function myFunction() {
    const myNumber = 1;
    console.log(myGlobal);

    function parent() { // Intern function.
        const inner = 2;
        console.log(myNumber, myGlobal);

        function child() {
            console.log(inner, myNumber, myGlobal);
        }

        return child();
    }

    return parent();
}

myFunction();