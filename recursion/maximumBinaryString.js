/**
 * @param {string} binary
 * @return {string}
 */
const maximumBinaryString = function (binary) {
  let left = 0
  let right = 0
  let flag = true
  for (const num of binary) {
    const isOne = num === '1'
    flag = flag && isOne
    left += flag
    right += !flag && isOne
  }

  const len = binary.length
  if (left + right >= len - 1) return binary

  let ans = ''
  if (left + right < len - 1) {
    const index = len - 1 - right
    for (let i = 0; i < len; i++) {
      ans += i === index ? '0' : '1'
    }
  }
  return ans
}

maximumBinaryString('000110')
