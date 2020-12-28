/**
 * @param {number[][]} boxes
 * @param {number} portsCount
 * @param {number} maxBoxes
 * @param {number} maxWeight
 * @return {number}
 */
const boxDelivering = function(boxes, portsCount, maxBoxes, maxWeight) {
  const n = boxes.length
  const p = Array(n + 1).fill(0)
  const w = Array(n + 1).fill(0)
  const neg = Array(n + 1).fill(0)
  const W = Array(n + 1).fill(0)
  for (let i = 1; i <= n; i++) {
    p[i] = boxes[i - 1][0]
    w[i] = boxes[i - 1][1]
    if (i > 1) {
      neg[i] = neg[i - 1] + (p[i - 1] != p[i])
    }
    W[i] = W[i - 1] + w[i]
  }

  const queue = [0]
  const f = Array(n + 1).fill(0)
  const g = Array(n + 1).fill(0)
  for (let i = 1; i <= n; i++) {
    while (queue.length && (i - queue[0] > maxBoxes || W[i] - W[queue[0]] > maxWeight)) {
      queue.shift()
    }
    f[i] = g[queue[0]] + neg[i] + 2
    if (i != n) {
      g[i] = f[i] - neg[i + 1]
      while (queue.length && g[i] <= g[queue[queue.length - 1]]) {
        queue.pop()
      }
      queue.push(i)
    }
  }

  return f[n]
};