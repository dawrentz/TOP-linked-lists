//main.js

//imports
import * as linkedListMod from "./linkedListMod.js";

// ====================================== Init ====================================== //

console.clear();

const list = new linkedListMod.LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");
list.prepend("prependNode"); //test: prepend to top

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
