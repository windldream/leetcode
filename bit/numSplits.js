/**
 * @param {string} s
 * @return {number}
 */
var numSplits = function (s) {
  const leftCount = Array(26).fill(0)
  const rightCount = Array(26).fill(0)
  let left = 0
  let right = 0

  for (let i = 0; i < s.length; i++) {
    const index = s[i].charCodeAt() - 'a'.charCodeAt()
    if (leftCount[index] === 0) {
      left++
    }
    leftCount[index] += 1
  }

  let ans = 0
  for (let i = s.length - 1; i > 0; i--) {
    const index = s[i].charCodeAt() - 'a'.charCodeAt()
    if (rightCount[index] === 0) {
      right++
    }
    rightCount[index] += 1
    leftCount[index] -= 1
    if (leftCount[index] === 0) {
      left--
    }
    if (left === right) ans++
  }
  return ans
}
