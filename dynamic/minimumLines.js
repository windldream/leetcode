/**
 * @param {number[][]} points
 * @return {number}
 */
var minimumLines = function (points) {
  const n = points.length
  const num = 1 << n
  const sameLines = Array(num).fill(false)

  for (let i = 0; i < num; i++) {
    if (countBit(i) <= 2) {
      sameLines[i] = true
    } else if (!sameLines[i - (i & -i)]) {
      sameLines[i] = false
    } else {
      const items = []
      let last = i

      for (let j = 0; j < 3; j++) {
        // 计算最低位1右边的1的个数
        items[j] = countBit((last & -last) - 1)
        // 去除最低位的1
        last &= last - 1
      }

      sameLines[i] = sameLine(points[items[0]], points[items[1]], points[items[2]])
    }
  }

  const dp = Array(num).fill(n)
  dp[0] = 0

  for (let i = 1; i < num; i++) {
    // 枚举i的子集
    for (let j = i; j > 0; j = (j - 1) & i) {
      if (sameLines[j]) {
        dp[i] = Math.min(dp[i], dp[i ^ j] + 1)
      }
    }
  }

  return dp[num - 1]

  function sameLine(a, b, c) {
    return (a[1] - b[1]) * (a[0] - c[0]) === (a[1] - c[1]) * (a[0] - b[0])
  }

  function countBit(num) {
    let count = 0

    while (num) {
      num &= num - 1
      count++
    }

    return count
  }
}

minimumLines(
  [
    [0, 1],
    [2, 3],
    [4, 5],
    [4, 3]
  ],
  [
    [0, 2],
    [-2, -2],
    [1, 4]
  ]
)
