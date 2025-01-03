/* NOTES:
Perfect binary tree: where every internal node has two children and all leaves are at the same leve
Balanced three: [ - left ] [ + right] | "Divide and conquer"

PARTS:
- ROOT
- Parent
- Children
*/

/*
     10
   /    \ 
  4     20
 /  \   /   \
2  8  17  170
*/

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new Node(value);

        if (this.root === null ) {
            this.root = newNode;
        } else {
            let currentNode = this.root;
            while (true) {
                if (value < currentNode.value) {
                    if (!currentNode.left) {
                        currentNode.left = newNode;
                        return this;
                    } else {
                        currentNode = currentNode.left;
                    }
                } else {
                    if (!currentNode.right) {
                        currentNode.right = newNode;
                        return this;
                    } else {
                        currentNode = currentNode.right;
                    }
                }
            }
        }
    }

    search(value) {
        let currentNode = this.root;
        while (currentNode && currentNode.value !== value) {
            if (value < currentNode.value) {
                currentNode = currentNode.left;
            } else {
                currentNode = currentNode.right;
            }
        }
        return currentNode;
    }
}

const tree = new BinarySearchTree();
tree.insert(1000);
tree.insert(1);
tree.insert(100);
tree.insert(101);