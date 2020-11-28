/**
 * @param {number[]} boxes
 * @param {number[]} warehouse
 * @return {number}
 */
var maxBoxesInWarehouse = function (boxes, warehouse) {
  boxes.sort((a, b) => a - b)
  const m = boxes.length
  const n = warehouse.length
  const ans = new Set()
  let cur = n
  for (let i = 0; i < m; i++) {
    let j = 0
    while (boxes[i] <= warehouse[j] && j < cur) {
      j++
    }
    if (j > 0) {
      ans.add(j - 1)
      cur = j - 1
    } else {
      break
    }
  }
  return ans.size
}

maxBoxesInWarehouse([1, 2, 2, 3, 4], [3, 4, 1, 2])
