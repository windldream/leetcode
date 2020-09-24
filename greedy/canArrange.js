/**
 * @param {number[]} arr
 * @param {number} k
 * @return {boolean}
 */
var canArrange = function (arr, k) {
  const len = arr.length
  let sum = arr.reduce((prev, cur) => prev + cur)
  if (sum % k) return false

  for (let i = 0; i < arr.length; i++) {
    arr[i] %= k
    if (arr[i] < 0) {
      arr[i] += k
    }
  }

  arr = arr.filter((val) => val).sort((a, b) => a - b)
  if (arr.length % 2 > 0) return false

  let l = 0
  let r = arr.length - 1

  while (l < r) {
    if (arr[l] + arr[r] !== k) return false
    l++
    r--
  }
  return true
}

canArrange([-4, -7, 5, 2, 9, 1, 10, 4, -8, -3], 3)
