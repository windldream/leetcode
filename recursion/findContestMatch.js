/**
 * @param {number} n
 * @return {string}
 */
const findContestMatch = function (n) {
  const arr = Array(n)
    .fill(0)
    .map((val, index) => index + 1)
  const ans = dfs(arr)
  return ans[0]

  function dfs(arr) {
    if (arr.length === 1) return arr
    const ans = []
    for (let i = 0; i < arr.length >> 1; i++) {
      ans.push('(' + arr[i] + ',' + arr[arr.length - i - 1] + ')')
    }
    return dfs(ans)
  }
}

findContestMatch(4)
