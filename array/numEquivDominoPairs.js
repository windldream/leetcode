/**
 * @param {number[][]} dominoes
 * @return {number}
 */
var numEquivDominoPairs = function (dominoes) {
  let ans = 0
  const arr = Array(100).fill(0)
  for (const array of dominoes) {
    array.sort()
    ans += arr[array[0] * 10 + array[1]]
    arr[array[0] * 10 + array[1]] += 1
  }
  return ans
}

numEquivDominoPairs([
  [1, 2],
  [1, 2],
  [1, 1],
  [1, 2],
  [2, 2]
])
