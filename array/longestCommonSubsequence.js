/**
 * @param {number[][]} arrays
 * @return {number[]}
 */
var longestCommonSubsequence = function (arrays) {
  let ans = getCommonList(arrays[0], arrays[1])

  for (let i = 2; i < arrays.length; i++) {
    ans = getCommonList(ans, arrays[i])
  }

  return ans

  function getCommonList(a, b) {
    return a.filter((num) => b.includes(num))
  }
}
