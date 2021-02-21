/**
 * @param {string} boxes
 * @return {number[]}
 */
var minOperations = function (boxes) {
  const ans = []
  const n = boxes.length
  for (let i = 0; i < n; i++) {
    ans[i] = getCnt(boxes, i)
  }
  return ans

  function getCnt(boxes, index) {
    let count = 0
    for (let i = 0; i < index; i++) {
      if (boxes[i] === '1') {
        count += index - i
      }
    }
    for (let i = index + 1; i < boxes.length; i++) {
      if (boxes[i] === '1') {
        count += i - index
      }
    }
    return count
  }
}
