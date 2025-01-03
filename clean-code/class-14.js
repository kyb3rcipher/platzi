// Paramater = [variable] number
function getDouble(number) {
    return number * 2;
}

// Argument = 10
getDouble(10);

// Good practice: Max 3 parameters

// Default parameter
function greet(name = "Strange") {
    console.log("Hello " + name);
}

greet();
greet("Kyb3r");