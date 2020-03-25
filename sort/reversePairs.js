/**
 * @param {number[]} nums
 * @return {number}
 */
var reversePairs = function(nums) {
  let count = 0;
  mergeSort(nums);
  return count;

  function merge(left, right) {
    let indexI = 0;
    let indexJ = 0;
    while (indexI < left.length && indexJ < right.length) {
      if (left[indexI] > 2 * right[indexJ]) {
        count += left.length - indexI;
        indexJ++;
      } else {
        indexI++;
      }
    }

    let leftI = 0;
    let rightI = 0;
    const res = [];
    while (leftI < left.length && rightI < right.length) {
      if (left[leftI] < right[rightI]) {
        res.push(left[leftI]);
        leftI++;
      } else {
        res.push(right[rightI]);
        rightI++;
      }
    }
    return [...res, ...left.slice(leftI), ...right.slice(rightI)];
  }

  function mergeSort(arr) {
    if (arr.length <= 1) {
      return arr;
    }
    const mid = arr.length >> 1;
    const l = arr.slice(0, mid);
    const r = arr.slice(mid);
    return merge(mergeSort(l), mergeSort(r));
  }
};

console.log(reversePairs([]));
