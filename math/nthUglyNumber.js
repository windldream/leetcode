/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function (n) {
  let a = 0
  let b = 0
  let c = 0
  const ans = [1]
  for (let i = 1; i < n; i++) {
    const min = Math.min(ans[a] * 2, ans[b] * 3, ans[c] * 5)
    if (min === ans[a] * 2) a++
    if (min === ans[b] * 3) b++
    if (min === ans[c] * 5) c++
    ans.push(min)
  }
  return ans[n - 1]
}

nthUglyNumber(10)
