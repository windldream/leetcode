/**
 * @param {number[]} packages
 * @param {number[][]} boxes
 * @return {number}
 */
var minWastedSpace = function (packages, boxes) {
  packages.sort((a, b) => a - b)
  const mod = BigInt(1e9 + 7)
  const n = packages.length
  const presum = Array(n + 1).fill(0n)

  for (let i = 0; i < n; i++) {
    presum[i + 1] = presum[i] + BigInt(packages[i])
  }

  let ans = Infinity

  for (const box of boxes) {
    box.sort((a, b) => a - b)

    if (packages[n - 1] > box[box.length - 1]) continue

    let lo = 0
    let total = 0n

    for (const y of box) {
      const idx = search(packages, y, lo)
      total += BigInt((idx - lo) * y) - (presum[idx] - presum[lo])
      lo = idx
    }

    ans = Math.min(ans, total)
  }

  return ans === Infinity ? -1 : ans % mod

  // 寻找第一个比target大的索引
  function search(packages, target, lo) {
    let hi = packages.length
    let idx = hi

    while (lo <= hi) {
      const mid = (lo + hi) >> 1

      if (packages[mid] > target) {
        hi = mid - 1
        idx = mid
      } else {
        lo = mid + 1
      }
    }

    return idx
  }
}
