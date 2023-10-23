// Filename: complex_code.js
// Description: This complex code demonstrates a custom implementation of a linked list with various operations.

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  getSize() {
    return this.size;
  }

  prepend(value) {
    const newNode = new Node(value);
    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.size++;
  }

  append(value) {
    const newNode = new Node(value);
    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.size++;
  }

  insertAt(position, value) {
    if (position < 0 || position > this.size) {
      throw new Error("Invalid position");
    }

    if (position === 0) {
      this.prepend(value);
    } else if (position === this.size) {
      this.append(value);
    } else {
      const newNode = new Node(value);
      let currentNode = this.head;
      let prevNode = null;
      let currentPosition = 0;

      while (currentPosition < position) {
        prevNode = currentNode;
        currentNode = currentNode.next;
        currentPosition++;
      }

      prevNode.next = newNode;
      newNode.next = currentNode;
      this.size++;
    }
  }

  removeFromHead() {
    if (this.isEmpty()) {
      throw new Error("Cannot remove from an empty list");
    }

    const valueToRemove = this.head.value;
    if (this.size === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
    }
    this.size--;
    return valueToRemove;
  }

  removeFromTail() {
    if (this.isEmpty()) {
      throw new Error("Cannot remove from an empty list");
    }

    const valueToRemove = this.tail.value;
    if (this.size === 1) {
      this.head = null;
      this.tail = null;
    } else {
      let currentNode = this.head;
      let prevNode = null;

      while (currentNode.next !== null) {
        prevNode = currentNode;
        currentNode = currentNode.next;
      }

      prevNode.next = null;
      this.tail = prevNode;
    }
    this.size--;
    return valueToRemove;
  }

  removeAt(position) {
    if (position < 0 || position >= this.size) {
      throw new Error("Invalid position");
    }

    if (position === 0) {
      return this.removeFromHead();
    } else if (position === this.size - 1) {
      return this.removeFromTail();
    } else {
      let currentNode = this.head;
      let prevNode = null;
      let currentPosition = 0;

      while (currentPosition < position) {
        prevNode = currentNode;
        currentNode = currentNode.next;
        currentPosition++;
      }

      prevNode.next = currentNode.next;
      this.size--;
      return currentNode.value;
    }
  }

  getFirst() {
    if (this.isEmpty()) {
      throw new Error("List is empty");
    }
    return this.head.value;
  }

  getLast() {
    if (this.isEmpty()) {
      throw new Error("List is empty");
    }
    return this.tail.value;
  }

  getAt(position) {
    if (position < 0 || position >= this.size) {
      throw new Error("Invalid position");
    }

    let currentNode = this.head;
    let currentPosition = 0;

    while (currentPosition < position) {
      currentNode = currentNode.next;
      currentPosition++;
    }

    return currentNode.value;
  }

  print() {
    let currentNode = this.head;
    while (currentNode !== null) {
      console.log(currentNode.value);
      currentNode = currentNode.next;
    }
  }
}

// Example usage:

const list = new LinkedList();

list.prepend(3);
list.prepend(2);
list.prepend(1);

list.append(4);
list.append(5);

list.insertAt(2, 2.5);
list.insertAt(4, 4.5);

console.log(list.getFirst()); // Output: 1
console.log(list.getLast()); // Output: 5
console.log(list.getAt(2)); // Output: 2.5

list.removeAt(5);
list.removeFromHead();

list.print();
// Output: 2
// 2.5
// 3
// 4
// 5