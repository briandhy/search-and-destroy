"use strict";

// Complete this algo
//[1], target 2

//recursive solution using slice
// const binarySearch = (array, target) => {
//   const center = Math.floor(array.length / 2);
//   const value = array[center];
//   if (value === target) return true;
//   if (array.length === 1) return false;
//   if (target < value) return binarySearch(array.slice(0, center), target);
//   if (target > value) return binarySearch(array.slice(center), target);
// };

//non-recusive, not using slice
// const binarySearch = (array, target) => {
// 	let center = Math.floor(array.length / 2);

// 	//searching the left side
// 	for (let i = 0; i < center; i = i / 2 )

// 	//searching the right side
// 	for (let i = center; i < array.length; i = i / 2)

// };

//[1, 5] target 2
//recursive non-slice solution
//[1,3,4,5,10,15,20,22,23,98,1000]; target = 25
const binarySearch = (array, target) => {
  const searchHalf = (startIdx, endIdx) => {
    const center = Math.floor((startIdx + endIdx) / 2);
    const value = array[center];
    if (value === target) return true;
    if (startIdx === endIdx) return false;
    if (target < value) return searchHalf(startIdx, center - 1);
    if (target > value) return searchHalf(center + 1, endIdx);
  };
  return searchHalf(0, array.length - 1);
};

//how do we search half of the array without slicing it?
//an array is just an object with indexes for keys
//use object methods on the array?
// in?

//brute force
//check each index value to see if it equals target
//return true if target is in array
//else return false

//BST
//find the center idx of array
// if value of that inx is equal return true
// if value is less than, go to midpoint of left and repeat above
// else go to midpoint of right and repeat above
//if we get to the last value and did not find, return false

/*
	EXTRA CREDIT:

	Can you augment the function above to run in constant O(1) space?
	This means, you cannot edit/copy the original array!
	How can we use other pieces of data, like pointers, to avoid slicing?

*/

module.exports = binarySearch;
