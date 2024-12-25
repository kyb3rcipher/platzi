let array = [1, 2, 3, 4, 5];
console.log(array.includes(4));

let list = ["David", "Oscar", "Kyb3r"];
console.log(list.includes("Kyb3r"));
console.log(list.includes("kyb3r"));

// With Objects
let object = { a: 1, b: 2, c: 3 };
console.log("a" in object);
console.log(object.hasOwnProperty("a"));
console.log(Object.hasOwn(object, "a"));