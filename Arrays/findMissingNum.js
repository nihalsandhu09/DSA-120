function findMissingNum(arr) {
  let total = (n * (n + 1)) / 2;

  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return total - sum;
}
