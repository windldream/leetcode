/**
 * @param {number[]} arr
 * @param {number} start
 * @return {boolean}
 */
var canReach = function (arr, start) {
  const n = arr.length
  const queue = [start]
  const visited = new Set()
  visited.add(start)

  while (queue.length) {
    const idx = queue.shift()
    if (arr[idx] === 0) return true

    if (idx + arr[idx] < n && !visited.has(idx + arr[idx])) {
      visited.add(idx + arr[idx])
      queue.push(idx + arr[idx])
    }

    if (idx - arr[idx] >= 0 && !visited.has(idx - arr[idx])) {
      visited.add(idx - arr[idx])
      queue.push(idx - arr[idx])
    }
  }

  return false
}
