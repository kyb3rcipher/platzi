class MyArray {
    constructor(size) {
        this.length = 0;
        this.data = new Array(size);
    }

    get(index) {    // Get element.
        return this.data[index];
    }

    push(item) {    // Add element to last index.
        this.data[this.length] = item;
        this.length++;
        return this.data;
    }

    pop() { // Delete last element index.
        const lastItem = this.data[this.length - 1];
        delete this.data[this.length - 1];
        this.length--;
        return lastItem;
    }

    shiftIndex(index) {
        for (let i = index; i < this.length - 1; i++) {
          this.data[i] = this.data[i + 1];
        }
        delete this.data[this.length - 1];
        this.length--;
    }

    delete(index) { // Delete item.
        const item = this.data[index];
        this.shiftIndex(index);
    
        return item;
    }
    
    unshift(item) { // Add element to first index.
        if (item) {
            for (let i = this.length; i > 0; i--) {
                this.data[i] = this.data[i - 1];
            }

            this.data[0] = item;
            this.length++;
        }
        return this.length;
    }

    shift() {   // Delete first index element.
        const firstItem = this.data[0];
        delete this.data[0];
        this.shiftIndex(0);
        return firstItem;
    }
}
    
const myArray = new MyArray();