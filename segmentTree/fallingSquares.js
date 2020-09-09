/**
 * @param {number[][]} positions
 * @return {number[]}
 */
var fallingSquares = function (positions) {
  const hList = []
  const ans = []
  if (positions.length === 0) return ans

  let maxH = positions[0][1]
  let high = positions[0][1]
  hList.push(high)
  ans.push(maxH)
  for (let i = 1; i < positions.length; i++) {
    const [left, sideLen] = positions[i]
    let high = sideLen
    for (let j = i - 1; j >= 0; j--) {
      if (!(positions[j][0] >= left + sideLen || positions[j][0] + positions[j][1] <= left)) {
        const tmp = hList[j] + sideLen
        if (tmp > high) {
          high = tmp
        }
      }
    }
    hList.push(high)
    if (high > maxH) {
      maxH = high
    }
    ans.push(maxH)
  }

  return ans
}
