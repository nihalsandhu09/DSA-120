/**
 * Question 3: Check Palindrome

Problem:
Given a number n, check if it is a palindrome. A number is a palindrome if it reads the same forward and backward.

Example:

Input: n = 121
Output: true

Input: n = 123
Output: false
 */

function CheckPalindrome(n) {
  if (n === 0) return false;
  let reverse = 0;
  let original = n;
  while (n !== 0) {
    let digits = n % 10;
    reverse = reverse * 10 + digits;
    n = Math.floor(n / 10);
  }
  if (original === reverse) return true;
  return false;
}
console.log(CheckPalindrome(121));
console.log(CheckPalindrome(123));
