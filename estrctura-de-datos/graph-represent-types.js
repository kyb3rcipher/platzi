
/*
    2 - 3
  /  \
 1 - 7
*/
class Node {
    constructor(value) {
        this.value = value;
    }
}

// Edge list - Repesent the connections
var graph = [
    [2, 3],
    [2, 3],
    [2, 1],
    [2, 7]
];

// Adjacent list
var graph = [
//     0     1         2         7
    [ [2], [2, 7], [3, 1, 7], [1, 2] ]
];

var graph = {
    0: [2],
    1: [2, 7],
    2: [3, 1, 7],
    7: [1, 2]
};

// Ajacent Matrix
var graph = [
    [0, 1, 0, 1], // Node 1 connections
    [1, 0, 1, 1], // Node 2 connections
    [0, 1, 0, 0], // Node 3 connections
    [1, 1, 0, 0]  // Node 7 connections
];

const graph = {
    0: [0, 1, 0, 1],
    1: [1, 0, 1, 1],
    2: [0, 1, 0, 0],
    3: [1, 1, 0, 0]
}