function greeting() {
    let userName = "Kyb3r";

    function displayUsername() {
        return `Hello ${userName}`;
    }

    return displayUsername;
}

const k = greeting();
console.log(k);
console.log(k());