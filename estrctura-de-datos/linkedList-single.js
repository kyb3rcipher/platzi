// 1 -> 2 -> 3 -> 4 -> 5 -> null

/*
let singlyLikedList = {
    head: {
        value: 1,
        next: {
            value: 2,
            next: {
                value: 3,
                next: {
                    value: 4,
                    next: {
                        value: 5,
                        next: null
                    }
                }
            }
        }
    }
}
*/

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class MySingleLinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null
        }

        this.tail = this.head;

        this.length = 1;
    }

    prepend(value) {    // Add new node to start.
        const newNode = new Node(value);
        newNode.next = this.tail;
        this.tail = newNode;
        this.length++;
        
        return this;
    }
    append(value) { // Add[append] new node to end.
        const newNode = new Node(value);
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;

        return this;
    }

    getIndex(index) {
        let currentNode = this.head;

        let counter = 0;
        while(counter === index) {
            currentNode = currentNode.next;
            counter++;
        }

        return currentNode;
    }

    insert(value, index) {  // Insert new node to specific index.
        // If the index to insert is equal or biggest than last index just append to last and return.
        if (index >= this.length) {
            return this.append(value);
        }

        const newNode = new Node(value);
        const beforePointer = this.getIndex(index - 1);
        // For save the next node (save garbageColletor).
        const holdPointer = beforePointer.next;
        
        beforePointer.next = newNode;
        newNode.next = holdPointer;

        return this;
    }

    remove(index) {
        if (index >= this.length) {
            console.error("ERROR: index is out of limits.");
        } else if (index === 0) {
            this.head = this.head.next;
            this.length--;
        } else {
            const beforePointer = this.getTheIndex(index - 1);
            const pointerToRemove = beforePointer.next;
            beforePointer.next = pointerToRemove.next;
            this.length--;
        }
    }
}

let myLinkedList = new MySingleLinkedList(1);
myLinkedList.append(2);
myLinkedList.append(3);
myLinkedList.append(4);
myLinkedList.append(5);
myLinkedList.append(6);

myLinkedList.insert(90, 0);
console.log(myLinkedList);