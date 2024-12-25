const user = { username: 'kyb3rcipher', age: 17, country: "Mexico" };

const { username, ...values } = user;
console.log(username);
console.log(values);