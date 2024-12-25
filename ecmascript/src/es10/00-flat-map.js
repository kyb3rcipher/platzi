const matrix = [
    1, 2, 3, 4, 5,
    [10, 11, 12, 13, 14, 15],
    [100, 200, 300, 400, 500]
];

console.log(matrix.flat(3));

const array = [10, 15, 20, 25, 30];
console.log(array.flatMap(value => [value, value * 2]));