/**
 * @param {number[]} light
 * @return {number}
 */
var numTimesAllBlue = function (light) {
  const len = light.length
  let ans = 0
  let maxPoint = 0
  for (let i = 0; i < len; i++) {
    maxPoint = Math.max(maxPoint, light[i])
    if (i + 1 === maxPoint) {
      ans++
    }
  }
  return ans
}

numTimesAllBlue([4, 1, 2, 3])
