/**
 * @param {number[]} arr
 * @param {number} target
 * @return {number}
 */
var findBestValue = function (arr, target) {
  arr.sort((a, b) => a - b)
  let sum = 0
  const n = arr.length
  for (let i = 0; i < arr.length; i++) {
    const x = Math.trunc((target - sum) / (n - i))
    if (x < arr[i]) {
      const y = (target - sum) / (n - i)
      if (y - x > 0.5) {
        return x + 1
      } else {
        return x
      }
    }
    sum += arr[i]
  }

  return arr[arr.length - 1]
}

findBestValue([2, 3, 5], 11)
