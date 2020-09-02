/**
 * @param {number[]} count
 * @return {number[]}
 */
var sampleStats = function (count) {
  let sum = 0
  let maxCountNum
  let maxCount = 0
  let min = Infinity
  let max = -Infinity
  let len = 0
  for (let i = 0; i < count.length; i++) {
    if (count[i] > 0) {
      min = Math.min(min, i)
      max = Math.max(max, i)
      sum += count[i] * i
      len += count[i]
      if (count[i] > maxCount) {
        maxCountNum = i
        maxCount = count[i]
      }
    }
  }

  let midLen = len / 2
  let mod = midLen % 2
  let mid
  len = 0
  for (let i = 0; i < count.length; i++) {
    if (mod) {
      if (midLen > len && midLen <= count[i] + len) mid = i
    } else {
      if (len === midLen && count[i] > 0) {
        mid = (i + i - 1) / 2
      } else if (midLen > len && midLen <= count[i] + len) mid = i
    }

    len += count[i]
  }

  return [min, max, sum / len, mid, maxCountNum]
}
