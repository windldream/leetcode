/**
 * @param {number[]} boxes
 * @param {number[]} warehouse
 * @return {number}
 */
var maxBoxesInWarehouse = function (boxes, warehouse) {
  const n = boxes.length
  const m = warehouse.length
  const l = Array(m).fill(0)
  const r = Array(m).fill(0)
  l[0] = r[m - 1] = Infinity

  for (let i = 1; i < m; i++) {
    l[i] = Math.min(l[i - 1], warehouse[i - 1])
  }
  for (let i = m - 2; i >= 0; i--) {
    r[i] = Math.min(r[i + 1], warehouse[i + 1])
  }
  for (let i = 0; i < m; i++) {
    warehouse[i] = Math.min(warehouse[i], Math.max(l[i], r[i]))
  }

  boxes.sort((a, b) => a - b)
  warehouse.sort((a, b) => a - b)
  let ans = 0
  let idx = 0
  for (const box of boxes) {
    while (idx < m && warehouse[idx] < box) {
      idx++
    }
    if (idx === m) break
    ans++
    idx++
  }
  return ans
}
