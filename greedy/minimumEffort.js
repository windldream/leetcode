/**
 * @param {number[][]} tasks
 * @return {number}
 */
var minimumEffort = function (tasks) {
  tasks.sort((a, b) => a[0] - a[1] - (b[0] - b[1]))
  let ans = 0
  let sum = 0
  for (const task of tasks) {
    ans = Math.max(ans, sum + task[1])
    sum += task[0]
  }
  return ans
}

minimumEffort([
  [1, 1],
  [1, 3]
])

// 6   ->   12 + 5 + 4 + 3 + 2 + 1
// 12  ->

// 4    ->  2
// 12   ->
