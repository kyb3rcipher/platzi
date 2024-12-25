function newUser(user, age, country) {
    return {
        user: user,
        age: age,
        country: country,
    }
}

// ECMAScript 6: Enahced object literals
function newUser(user, age, country, uId) {
    return {
        user,
        age,
        country,
        id: uId
    }
}
console.log(newUser("kyb3rcipher", 17, "Mexico", 1));