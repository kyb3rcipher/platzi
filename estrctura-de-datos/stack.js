class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class MyStack {
    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }

    peek() {    // Select first in element.
        return this.top;
    }

    push(value) {
        const newNode = new Node(value);
        
        if (this.length === 0) {
            this.top = newNode;
            this.bottom = newNode;
        } else {
            const holdNode = this.top;
            this.top = newNode;
            this.top.next = holdNode;
        }

        this.length++;
        return this;
    }
}

const stack = new MyStack();
stack.push(1);
stack.push(2);
