/**
 * @param {number[]} customers
 * @param {number} boardingCost
 * @param {number} runningCost
 * @return {number}
 */
var minOperationsMaxProfit = function (customers, boardingCost, runningCost) {
  let seat = 0
  let waiting = 0
  let count = 0
  let ans = -1
  let max = 0
  const len = customers.length
  let i = 0
  while (i < len || waiting > 0) {
    if (i < len) {
      waiting += customers[i++]
    }
    const cur = Math.min(waiting, 4)
    seat += cur
    waiting -= cur
    count++
    const earn = seat * boardingCost - count * runningCost
    if (earn > max) {
      max = earn
      ans = count
    }
  }
  return ans
}
