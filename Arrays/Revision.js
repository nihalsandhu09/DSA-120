/**
 * find Find the maximum element in an array
Example: [2, 5, 1, 7, 3] → 7
 */

function findTheMaximum(arr) {
  let maximum = -Infinity;
  if (arr.length < 1) return arr[i];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > maximum) {
      maximum = arr[i];
    }
  }
  return maximum;
}
console.log(findTheMaximum([2, 5, 1, 7, 3]));

// Reverse an array (without using inbuilt functions).
// Example: [1, 2, 3, 4] → [4, 3, 2, 1]

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
console.log(reverseArray([1, 2, 3, 4]));

/**Check if an array is sorted (in ascending order).
Example: [1, 2, 3, 5] → true
[1, 3, 2, 5] → false */

function checkifSorted(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i + 1]) {
      return false;
    }
  }
  return true;
}
console.log(checkifSorted([1, 2, 3, 5]));
console.log(checkifSorted([1, 4, 3, 5]));

/**Rotate an array by k steps (cyclic rotation).
Example: arr = [1,2,3,4,5], k = 2 → [4,5,1,2,3] */

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
  k = k % arr.length;

  reverse(arr, 0, arr.length - 1);

  reverse(arr, 0, k - 1);

  reverse(arr, k, arr.length - 1);
  return arr;
}
console.log(rotate([1, 2, 3, 4, 5], 2));

/**Find the second largest element in an array.
Example: [12, 35, 1, 10, 34, 1] → 34 */

function findSecondLargest(arr) {
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
  return second === -Infinity ? null : second;
}

console.log(findSecondLargest([12, 35, 1, 10, 34, 1]));
