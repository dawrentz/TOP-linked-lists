function Node(value = null, nextNode = null) {
  return {
    value,
    nextNode,
  };
}

export class LinkedList {
  constructor() {
    this.listHead = null;
  }

  append(value) {
    const newNode = Node(value);
    if (this.listHead === null) this.listHead = newNode;
    else this.tail().nextNode = newNode;
  }

  prepend(value) {
    const newNode = Node(value, this.listHead);
    this.listHead = newNode;
  }

  size(node = this.listHead) {
    if (node === null) return 0;
    if (node.nextNode === null) return 1;
    return 1 + this.size(node.nextNode);
  }

  head() {
    return this.listHead;
  }

  tail() {
    if (this.listHead === null) return this.listHead;
    return this.at(this.size() - 1);
  }

  at(index, node = this.listHead) {
    const maxIndex = this.size() - 1;
    if (index > maxIndex || index < 0 || !Number.isInteger(index)) {
      return `Must input number between 0 and ${maxIndex}`;
    }
    if (index === 0) return node;
    return this.at(index - 1, node.nextNode);
  }

  pop() {
    const newTail = this.at(this.size() - 2);
    newTail.nextNode = null;
  }

  contains(searchValue) {
    if (this.find(searchValue) === "Value not found") return false;
    else return true;
  }

  find(searchValue, index = 0) {
    const maxIndex = this.size() - 1;
    if (index > maxIndex) return "Value not found";
    if (this.at(index).value === searchValue) return index;
    return this.find(searchValue, ++index);
  }

  toString(node = this.listHead) {
    if (node.nextNode === null) {
      return `( ${node.value} ) -> null`;
    }
    return `( ${node.value} )`.concat(` -> ${this.toString(node.nextNode)}`);
  }

  insertAt(value, index) {
    const newNode = Node(value);
    const leftNode = this.at(index - 1);
    const newRightNode = this.at(index);

    leftNode.nextNode = newNode;
    newNode.nextNode = newRightNode;
  }

  removeAt(index) {
    const leftNode = this.at(index - 1);
    const rightNode = this.at(index + 1);

    leftNode.nextNode = rightNode;
  }
}
