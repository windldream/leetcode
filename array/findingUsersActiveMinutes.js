/**
 * @param {number[][]} logs
 * @param {number} k
 * @return {number[]}
 */
var findingUsersActiveMinutes = function (logs, k) {
  const userMap = new Map()
  for (const [id, time] of logs) {
    if (!userMap.has(id)) userMap.set(id, new Set())
    userMap.get(id).add(time)
  }

  const ans = Array(k).fill(0)
  for (const [id, times] of userMap) {
    const n = times.size
    ans[n - 1] += 1
  }
  return ans
}
