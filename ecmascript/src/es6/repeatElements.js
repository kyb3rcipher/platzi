const array = [1, 1, 2, 2, 3, 4, 4, 5];

const noRepeat = [ ... new Set(array)];
console.log(noRepeat); // [ 1, 2, 3, 4, 5 ]