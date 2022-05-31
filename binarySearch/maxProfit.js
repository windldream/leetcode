/**
 * @param {number[]} inventory
 * @param {number} orders
 * @return {number}
 */
var maxProfit = function (inventory, orders) {
  inventory.sort((a, b) => a - b)
  let l = 0
  let r = Math.max(...inventory)
  let t = 0

  while (l <= r) {
    const mid = (l + r) >> 1
    const cnt = getCnt(inventory, mid)

    if (cnt <= orders) {
      t = mid
      r = mid - 1
    } else {
      l = mid + 1
    }
  }

  const mod = BigInt(1e9 + 7)
  let rest = orders - getCnt(inventory, t)
  let ans = 0n

  for (const ball of inventory) {
    if (ball >= t) {
      if (rest > 0) {
        ans += rangeSum(t, ball)
        rest--
      } else {
        ans += rangeSum(t + 1, ball)
      }
    }
  }

  return ans % mod

  function getCnt(inventory, mid) {
    let cnt = 0

    for (const ball of inventory) {
      if (ball > mid) {
        cnt += ball - mid
      }
    }

    return cnt
  }

  function rangeSum(x, y) {
    x = BigInt(x)
    y = BigInt(y)
    return ((x + y) * (y - x + 1n)) / 2n
  }
}
