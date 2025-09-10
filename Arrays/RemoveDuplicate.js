/* Remove Duplicates from a Sorted Array

Description:
Given a sorted array of integers, remove the duplicates in-place such that each element appears only once. Return the new length of the array after removing duplicates.

Example:

Input: [1, 1, 2, 2, 3, 4, 4]  
Output: [1, 2, 3, 4] (new length = 4)


⚡Constraints:

Do not use extra space for another array.

Modify the input array in-place.*/

function removeDuplicate(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (!unique.includes(arr[i])) {
      unique.push(arr[i]);
    }
  }

  // copy back into original arr
  for (let i = 0; i < unique.length; i++) {
    arr[i] = unique[i];
  }

  return unique.length;
}



// optimal approach 

function removeDuplicatesOptimal(arr) {
  if (arr.length === 0) return 0;

  let i = 0; // slow pointer

  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }

  return i + 1; // new length
}
