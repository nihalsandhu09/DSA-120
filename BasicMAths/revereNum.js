/**2: Reverse a Number

Problem:
Given a number n, reverse its digits and return the reversed number.

Example:

Input: n = 12345
Output: 54321 */

function reverse(n) {
  let reverse = 0;

  while (n !== 0) {
    let digits = n % 10;
    reverse = reverse * 10 + digits;
    n = Math.floor(n / 10);
  }
  return reverse;
}
console.log(reverse(12345));
