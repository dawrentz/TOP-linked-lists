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

//Issue: project asks for functions with one parameter (ex: "at(index) returns the node at the given index")
//  but without a way to pass the node into the function, recursion won't work?

//Solution: pass node as the second parameter but set the default to this.listHead (this.head is taken by function method "head()"")
//  This allows to only "at(index)" to be called

//Idea: could wrap at(index) around another function that passes the node parameter, but that seems redundant

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

    //error handling
    if (index > maxIndex || index < 0 || !Number.isInteger(index)) {
      return `Must input number between 0 and ${maxIndex}`;
    }
    //base case
    if (index === 0) return node;

    //starts at head and uses user index-input as the number of moves, landing on desired node
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

  find(searchValue, index = 0) {
    const maxIndex = this.size() - 1;

    //error handling
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

  //finds and returns node
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

console.log("===================== head =====================");
console.log(list.head());
console.log("===================== tail =====================");
console.log(list.tail());
console.log("===================== toString =====================");
console.log(list.toString());
console.log("===================== size =====================");
console.log(list.size());
console.log("===================== at =====================");
console.log("6");
console.log(list.at(6));
console.log("7");
console.log(list.at(7));
console.log("===================== pop =====================");
list.pop();
console.log(list.toString());
console.log("===================== contains =====================");
console.log("cat");
console.log(list.contains("cat"));
console.log("cats");
console.log(list.contains("cats"));
console.log("===================== find =====================");
console.log("parrot");
console.log(list.find("parrot"));
console.log("parrots");
console.log(list.find("parrots"));
console.log("===================== insertAt =====================");
console.log("zebra at 2");
list.insertAt("zebra", 2);
console.log(list.toString());
console.log("===================== removeAt =====================");
console.log("3 (cat)");
list.removeAt(3);
console.log(list.toString());
