/**Find the Indices of Two Numbers with a Target Product

You are given an array of integers nums and an integer target.
Return the indices of the two numbers such that their product is equal to target.

You may assume that each input has exactly one solution, and you may not use the same element twice.
Return the answer in any order.

Example:

Input:  nums = [2, 4, 6, 8], target = 16
Output: [0, 3]   // because nums[0] * nums[3] = 2 * 8 = 16 */
// brute force Brute Force → O(n²) time, O(1) space
function TwoSum(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] * arr[j] === target) {
        return [i, j];
      }
    }
  }
}

// with hashing  Optimal → O(n) time, O(n) space

function TwoProduct(arr, target) {
  const map = new Map();

  for (let i = 0; i < arr.length; i++) {
    if (target % arr[i] === 0) {
      // only check valid divisors
      let pair = target / arr[i];
      if (map.has(pair)) {
        return [map.get(pair), i];
      }
    }
    map.set(arr[i], i);
  }
}
