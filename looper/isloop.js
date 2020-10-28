"use strict";

const LinkedList = require("./linkedlist");

//Complete this algo
//traverse the linked list, memorize each node,if we encounter a node with
//repeatable value, return true
//otherwise, return false

/* const isLoop = (linkedlist) => {
  let currentNode = linkedlist.head;
  const memory = {};
  while (currentNode) {
    if (currentNode.value in memory) return true;
    else memory[currentNode.value] = 1;
    currentNode = currentNode.next;
  }
  return false;
}; */

const isLoop = (linkedlist) => {
  let currentNode = linkedlist.head;
  const memory = {};
  while (currentNode) {
    if (currentNode.value in memory) return true;
    else memory[currentNode.value] = 1;
    //console.log(memory);
    currentNode = currentNode.next;
  }
  return false;
};

/*
EXTRA CREDIT:

Write a function findLoop() that consumes a linkedlist with a loop
This function should return the Node value the loop begins at
Remember to write some test specs too!

*/

const findLoop = (linkedlist) => {
  let currentNode = linkedlist.head;
  const memory = {};
  while (currentNode) {
    if (currentNode.value in memory) {
      console.log(currentNode.value);
      return currentNode.value;
    } else memory[currentNode.value] = 1;
    currentNode = currentNode.next;
  }
  return null;
};

module.exports = { isLoop, findLoop };
