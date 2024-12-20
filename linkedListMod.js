console.clear();
// linkedListMod.js

// ====================================== Major Functions ====================================== //

//factory function for nodes
function Node(value = null, nextNode = null) {
  return {
    value,
    nextNode,
  };
}

//linked list maker
export class LinkedList {
  //init list with null listHead
  constructor() {
    this.listHead = null;
  }

  //create new node and make last
  append(value) {
    const newNode = Node(value);

    if (this.listHead === null) {
      this.listHead = newNode;
    } else {
      this.tail().nextNode = newNode;
    }
  }

  //create new node and make first
  //needs loop through list and update all? no just point to the old listHead
  prepend(value) {
    const newNode = Node(value);

    if (this.listHead === null) {
      //set nextNode to current listHead then update this new node to be the listHead
      this.listHead = newNode;
    } else {
      newNode.nextNode = this.listHead;
      this.listHead = newNode;
    }
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
    return this.search(this.listHead, "nextNode", null);
  }

  at(index, node = this.listHead) {
    const maxIndex = this.size() - 1;

    if (index > maxIndex) return "Index too large for list!";

    if (index < 0) return "No negative indexes!";
    if (index === 0) return node;
    return this.at(index - 1, node.nextNode);
  }

  pop() {
    const newTail = this.search(this.listHead, "nextNode", this.tail());
    newTail.nextNode = null;
  }

  contains(searchValue, node = this.listHead) {
    if (node === null) return false;
    if (node.value === searchValue) return true;
    if (node.nextNode === null) return false;
    return this.contains(searchValue, node.nextNode);
  }

  toString(node = this.listHead) {
    if (node.nextNode === null) {
      return `( ${node.value} ) -> null`;
    }
    return `( ${node.value} )`.concat(` -> ${this.toString(node.nextNode)}`);
  }

  search(node = this.listHead, searchProp, searchVal) {
    if (node[searchProp] === searchVal) return node;
    return this.search(node.nextNode, searchProp, searchVal);
  }
}

//testing
const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");
list.prepend("prependNode");

// console.log(list.head());
// console.log(list.tail());
console.log("toString =====================");
console.log(list.toString());
console.log("size =====================");
console.log(list.size());
console.log("at =====================");
console.log(list.at(-2));
console.log("pop =====================");
list.pop();
console.log(list.toString());
console.log("contains =====================");
console.log("cat");
console.log(list.contains("cat"));
console.log("cats");
console.log(list.contains("cats"));
