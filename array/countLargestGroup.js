/**
 * @param {number} n
 * @return {number}
 */
var countLargestGroup = function (n) {
  const map = new Map()
  for (let i = 1; i <= n; i++) {
    let sum = 0
    for (const c of i + '') {
      sum += +c
    }
    if (!map.has(sum)) {
      map.set(sum, [])
    }
    map.get(sum).push(i)
  }

  const vals = [...map.values()].sort((a, b) => b.length - a.length)
  let ans = 1
  for (let i = 1; i < vals.length; i++) {
    if (vals[i].length !== vals[i - 1].length) break
    ans++
  }
  return ans
}
