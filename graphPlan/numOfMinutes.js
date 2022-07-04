/**
 * @param {number} n
 * @param {number} headID
 * @param {number[]} manager
 * @param {number[]} informTime
 * @return {number}
 */
var numOfMinutes = function (n, headID, manager, informTime) {
  const tree = new Map()

  for (let i = 0; i < n; i++) {
    if (i !== headID) {
      if (!tree.has(manager[i])) tree.set(manager[i], new Set())
      tree.get(manager[i]).add(i)
    }
  }

  const queue = [[headID, 0]]
  let ans = 0

  while (queue.length) {
    for (let i = 0, len = queue.length; i < len; i++) {
      const [id, time] = queue.shift()
      ans = Math.max(ans, time + informTime[id])

      if (tree.has(id)) {
        for (const next of tree.get(id)) {
          queue.push([next, time + informTime[id]])
        }
      }
    }
  }

  return ans
}
