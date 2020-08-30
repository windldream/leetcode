/**
 * @param {number} num
 * @return {number}
 */
var reverseBits = function (num) {
  const res = Array(32).fill(0)
  let index = 0
  while (num > 0) {
    if (num % 2) {
      res[index] += 1
    } else {
      index++
    }
    num >>= 1
  }

  let max = 0
  for (let i = 0; i <= index; i++) {
    max = Math.max(max, res[i] + res[i + 1] + 1)
  }
  return max
}

reverseBits(1775)
