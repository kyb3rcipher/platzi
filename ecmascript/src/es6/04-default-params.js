// Default value for variable in functions
// Before...
function newUser(name, age, country) {
    var name = name || "Kyb3r";
    var age = age || 17;
    var country = country || "Mexico";
    console.log(name, age, country);
}

newUser();
newUser("David", 15, "Colombia");

// ECMAScript 6
function newAdmin(name = "Kyb3r", age = 17, country = "Mexico") {
    console.log(name, age, country);
}

newAdmin();
newAdmin("Gabriel", 19, "Ecuador");