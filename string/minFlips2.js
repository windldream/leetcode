/**
 * @param {string} s
 * @return {number}
 */
var minFlips = function (s) {
  const n = s.length
  const target = '01'
  let cnt = 0
  for (let i = 0; i < n; i++) {
    cnt += s[i] !== target[i % 2]
  }

  let ans = Math.min(cnt, n - cnt)
  for (let i = 0; i < n; i++) {
    // 删除第i位的计数
    cnt -= s[i] !== target[i % 2]
    cnt += s[i] !== target[(i + n) % 2]
    ans = Math.min(ans, cnt, n - cnt)
  }
  return ans
}

// 101010
