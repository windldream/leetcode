/**
 * @param {number[]} aliceValues
 * @param {number[]} bobValues
 * @return {number}
 */
var stoneGameVI = function (aliceValues, bobValues) {
  const list = []
  const len = aliceValues.length
  for (let i = 0; i < len; i++) {
    list.push([i, aliceValues[i], bobValues[i]])
  }
  list.sort((a, b) => b[1] + b[2] - a[1] - a[2])

  let aliceSum = 0
  let bobSum = 0
  for (let i = 0; i < len; i += 2) {
    aliceSum += list[i][1]
    if (i + 1 < len) {
      bobSum += list[i + 1][2]
    }
  }

  return aliceSum > bobSum ? 1 : aliceSum === bobSum ? 0 : -1
}
