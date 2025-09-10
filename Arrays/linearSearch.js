/**Write a function linearSearch(arr, target) in JavaScript that:

Takes an array and a target number.

Returns the index if the element is found.

Returns -1 if the element is not found. */

function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}
const output = linearSearch([10, 20, 30, 40, 50], 30);
console.log(output);

/**Problem 2: Find Maximum & Minimum in Array

Write a function findMinMax(arr) that returns both minimum and maximum from an array.

⚡ Example:

findMinMax([10, 3, 45, 6, 23]); 
// 👉 { min: 3, max: 45 } */

function findMinMax(arr) {
  let min = arr[0];
  let max = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
    if (arr[i] < min) {
      min = arr[i];
    }
  }

  console.log("Max:", max, "Min:", min);
}

findMinMax([10, 3, 45, 6, 23]);

/**Question 3:
Write a function to reverse an array in place (without using reverse() or extra arrays). */

// function reverseArray(arr) {
//   let reverse = [];
//   for (let i = arr.length - 1; i >= 0; i--) {
//     reverse.push(arr[i]);
//   }
//   console.log(reverse);
// }

// reverseArray([1, 2, 3, 4, 5]); // [5, 4, 3, 2, 1]

// this is brute force where we use extra array

//  with Two pointer

function reverseArray(arr) {
  let i = 0;
  let j = arr.length - 1;

  while (i < j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    i++;
    j--;
  }
  return arr;
}
console.log(reverseArray([1, 2, 3, 4, 5]));

/***
 * Question 4: Find the Second Largest Element in an Array

👉 You need to return the second largest number in the array without using built-in methods like sort().

Example:

Input: [10, 20, 4, 45, 99]  
Output: 45


⚠️ Things to watch out for:

What if all numbers are the same?

What if the array has only one element?
 */

function findSecondLargest(arr) {
  if (arr.length < 2) return null; // Edge case

  let largest = -Infinity;
  let second = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      second = largest;
      largest = arr[i];
    } else if (arr[i] > second && arr[i] !== largest) {
      second = arr[i];
    }
  }

  return second === -Infinity ? null : second; // Handle case if no second largest
}
console.log(findSecondLargest([10, 20, 4, 45, 99]));

/**Move All Zeros to the End

Given an array, move all zeros to the end while maintaining the relative order of non-zero elements.

Example:

Input: [0, 1, 0, 3, 12]  
Output: [1, 3, 12, 0, 0]


⚡ Constraints:

Do it in-place (no extra array).

Time complexity O(n).

Do you want to give it a try first? */

// Brute force approach O(n²),
function moveAllZeros(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === 0) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}
console.log(moveAllZeros([0, 1, 0, 3, 12]));

// omptimize approach

function moveAllZeros(arr) {
  let pos = 0; // position for next non-zero

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      arr[pos] = arr[i];
      pos++;
    }
  }

  // fill remaining positions with zero
  while (pos < arr.length) {
    arr[pos] = 0;
    pos++;
  }

  return arr;
}

console.log(moveAllZeros([0, 1, 0, 3, 12])); // [1, 3, 12, 0, 0]

/**Q6: Rotate an Array by K Steps

👉 Given an array, rotate it to the right by k steps, where k is non-negative.

Example 1:

Input: arr = [1, 2, 3, 4, 5, 6, 7], k = 3  
Output: [5, 6, 7, 1, 2, 3, 4]


Example 2:

Input: arr = [-1, -100, 3, 99], k = 2  
Output: [3, 99, -1, -100]


⚡ Constraints:

Don’t use extra arrays (O(1) space).

Time complexity should be O(n). */

function rotate(arr, k) {
  let i = 0;
  let j = arr.length - 1;

  while (i < j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    i++;
    j--;
  }
  arr[i] = arr[k];
  k--;
  i++;
  return arr;
}
// console.log(rotate([1, 2, 3, 4, 5, 6, 7], (k = 3)));

// right code
function reverse(arr, start, end) {
  while (start < end) {
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--;
  }
}

function rotate(arr, k) {
  k = k % arr.length; // handle if k > n

  // Step 1: reverse whole array
  reverse(arr, 0, arr.length - 1);

  // Step 2: reverse first k elements
  reverse(arr, 0, k - 1);

  // Step 3: reverse remaining elements
  reverse(arr, k, arr.length - 1);

  return arr;
}
console.log(rotate([1, 2, 3, 4, 5, 6, 7], (k = 3)));

// Find the missing Number 