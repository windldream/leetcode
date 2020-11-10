/**
 * @param {number[]} arr
 * @return {number}
 */
var numOfSubarrays = function (arr) {
  const mod = 10 ** 9 + 7
  let even = 0
  let odd = 0
  let sum = 0
  for (const num of arr) {
    sum += num
    if (sum & 1) {
      odd++
    } else {
      even++
    }
  }
  return (odd + even * odd) % mod
}
