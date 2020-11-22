/**
 * @param {number[]} inventory
 * @param {number} orders
 * @return {number}
 */
var maxProfit = function (inventory, orders) {
  const mod = BigInt(10 ** 9 + 7)
  inventory.sort((a, b) => b - a)
  let sum = 0n
  let j = 0
  const len = inventory.length
  orders = BigInt(orders)
  while (orders > 0n) {
    while (j < len && inventory[j] >= inventory[0]) j++
    let next = 0
    if (j < len) {
      next = inventory[j]
    }
    let bucks = BigInt(j),
      delta = BigInt(inventory[0] - next)
    let rem = bucks * delta
    if (rem > orders) {
      const dec = BigInt(orders / bucks)
      const a1 = BigInt(inventory[0]) - dec + 1n
      const an = BigInt(inventory[0])
      sum += (((a1 + an) * dec) / 2n) * bucks
      sum += (BigInt(inventory[0]) - dec) * (orders % bucks)
    } else {
      const a1 = BigInt(next + 1)
      const an = BigInt(inventory[0])
      sum += (((a1 + an) * delta) / 2n) * bucks
      inventory[0] = next
    }
    orders -= rem
    sum %= mod
  }
  return sum
}

// 10 + 9 + 8 + 7 + 8 + 7 + 6 + 6 +6 +5 + 5 + 5 + 4 + 4 + 4 + 4 + 3 + 3 + 3 + 3
