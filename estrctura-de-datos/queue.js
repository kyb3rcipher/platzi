class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        
        this.length = 0;
    }

    enqueue(value) {    // Add element to the end of queue.
        const newElement = new Node(value);
        
        if (this.length === 0) {
            this.first = newElement;
            this.last = newElement;
        } else {
            this.last.next = newElement;
            this.last = newElement;
        }

        this.length++;
        return this;
    }

    peek() {
    return this.first;
  }

    dequeue() { // Remove the first element.
        if (this.length === 0) {
            console.error("The queue don't have elements!");
        } else {
            this.first = this.first.next;
        }

        this.length--;
        return this;
    }

    peek() {    // Take the first element.
        return this.first;
    }
}

const myQueue =  new Queue();
myQueue.enqueue(0);
myQueue.enqueue(1);
myQueue.enqueue(2);

console.log(myQueue);