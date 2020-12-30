/**
 * @param {number[]} arr
 * @return {number}
 */
const countElements = function(arr) {
  let count = 0
  for (const x of arr) {
    if (arr.includes(x + 1)) count++
  }
  return count
};