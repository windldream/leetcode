/**
 * @param {string} s
 * @return {number}
 */
var longestAwesome = function (s) {
  let ans = 1
  let cur = 0
  const map = new Map()
  map.set(cur, -1)
  for (let i = 0; i < s.length; i++) {
    cur ^= 1 << s[i]
    for (let j = 0; j < 10; j++) {
      // 假如一个数字出现奇数次 那么再异或上一次这个数字 这个数字将会出现偶数次
      const next = cur ^ (1 << j)
      if (map.has(next)) {
        ans = Math.max(ans, i - map.get(next))
      }
    }
    if (!map.has(cur)) {
      map.set(cur, i)
    } else {
      ans = Math.max(ans, i - map.get(cur))
    }
  }
  return ans
}

longestAwesome('3242415')
