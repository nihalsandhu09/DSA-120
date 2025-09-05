/**
 * Count Digits

Problem:
Given a number n, count how many digits it has.

Example:

Input: n = 12345
Output: 5
 */
// approach  so we keep dividing it untill n reacees 0 


function CountDigits(n) {
  let count = 0;
  if (n === 0) return 1;
  while (n !== 0) {
    n = Math.floor(n / 10);
    count++;
  }
  return count;
}
console.log(CountDigits(1234));
