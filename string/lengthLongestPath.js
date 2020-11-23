/**
 * @param {string} input
 * @return {number}
 */
var lengthLongestPath = function (input) {
  const len = input.length
  if (len === 0) return 0

  const sum = Array(len + 1).fill(0)
  let ans = 0
  for (const s of input.split('\n')) {
    const level = s.lastIndexOf('\t') + 2
    // 字符串的长度减去制表符的长度
    const size = s.length - (level - 1)
    if (s.includes('.')) {
      ans = Math.max(ans, sum[level - 1] + size)
    } else {
      sum[level] = sum[level - 1] + size + 1
    }
  }
  return ans
}

lengthLongestPath('dir\n\tsubdir1\n\t\tfile1.ext\n\t\tsubsubdir1\n\tsubdir2\n\t\tsubsubdir2\n\t\t\tfile2.ext')
