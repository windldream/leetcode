/**
 * @param {number[]} forbidden
 * @param {number} a
 * @param {number} b
 * @param {number} x
 * @return {number}
 */
var minimumJumps = function (forbidden, a, b, x) {
  const queue = [[0, 0]]
  const forwardVisited = new Set(forbidden)
  const backVisited = new Set(forbidden)
  let step = 0

  while (queue.length) {
    for (let i = 0, len = queue.length; i < len; i++) {
      // dir为0 表示往前跳
      const [idx, dir] = queue.shift()
      if (idx === x) return step

      if (idx + a <= 4000 && !forwardVisited.has(idx + a)) {
        queue.push([idx + a, 0])
        forwardVisited.add(idx + a)
      }

      if (dir === 0) {
        if (idx - b >= 0 && !backVisited.has(idx - b)) {
          queue.push([idx - b, 1])
          backVisited.add(idx - b)
        }
      }
    }

    step++
  }

  return -1
}
