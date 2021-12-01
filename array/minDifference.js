/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {number[]}
 */
var minDifference = function (nums, queries) {
  const len = nums.length
  const c = 100
  const count = Array(c + 1).fill(0)
  const pre = [count.slice()]

  // 计算c个数的前缀和
  for (let i = 0; i < len; i++) {
    count[nums[i]] += 1
    pre[i + 1] = count.slice()
  }

  const ans = []
  for (const [l, r] of queries) {
    let last = 0
    let best = Infinity
    // 从小到大枚举c的可能值
    for (let j = 1; j <= c; j++) {
      // 包含j
      if (pre[r + 1][j] - pre[l][j]) {
        // last不等0表示区间包含last
        if (last) {
          best = Math.min(j - last, best)
        }
        last = j
      }
    }
    if (best === Infinity) {
      best = -1
    }
    ans.push(best)
  }

  return ans
}

minDifference(
  [1, 3, 4, 8],
  [
    [0, 1],
    [1, 2],
    [2, 3],
    [0, 3]
  ]
)
