/**
 * @param {number[][]} workers
 * @param {number[][]} bikes
 * @return {number[]}
 */
var assignBikes = function (workers, bikes) {
  const n = workers.length
  const m = bikes.length
  const arr = []
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      const d = Math.abs(workers[i][0] - bikes[j][0]) + Math.abs(workers[i][1] - bikes[j][1])
      arr.push([d, i, j])
    }
  }

  arr.sort((a, b) => {
    if (a[0] === b[0]) {
      if (a[1] === b[1]) {
        return a[2] - b[2]
      }
      return a[1] - b[1]
    }
    return a[0] - b[0]
  })

  const ans = Array(n).fill(-1)
  for (let i = 0; i < arr.length; i++) {
    if (ans[arr[i][1]] !== -1) continue
    if (ans.includes(arr[i][2])) continue
    ans[arr[i][1]] = arr[i][2]
  }
  return ans
}

assignBikes(
  [
    [0, 0],
    [1, 1],
    [2, 0]
  ],
  [
    [1, 0],
    [2, 2],
    [2, 1]
  ]
)
