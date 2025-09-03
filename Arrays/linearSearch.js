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
