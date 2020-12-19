/**
 * @param {number[]} forbidden
 * @param {number} a
 * @param {number} b
 * @param {number} x
 * @return {number}
 */
const minimumJumps = function(forbidden, a, b, x) {
  const dirs = [[a, 'r'], [-b, 'l']]
  const visited = new Set()
  const queue = []
  queue.push([0, 'l'])
  visited.has(0)
  let ans = 0
  while (queue.length) {
    const len = queue.length
    for (let i = 0; i <len; i++) {
      const [y, dir] = queue.shift()
      if (y === x) return ans
      for (const [dis, d] of dirs) {
        if (dir === 'l' && d === 'l') continue
        const t = y + dis
        if (t < 0 || t > 6000 || forbidden.includes(t)) continue
        if (d === 'r') forbidden.push(t)
        queue.push([t, d])
      }
    }
    ans++
  }
  return -1
};