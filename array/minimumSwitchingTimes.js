/**
 * @param {number[][]} source
 * @param {number[][]} target
 * @return {number}
 */
var minimumSwitchingTimes = function (source, target) {
  const targetMap = new Map()

  for (const list of target) {
    for (const num of list) {
      if (!targetMap.has(num)) targetMap.set(num, 0)
      targetMap.set(num, targetMap.get(num) + 1)
    }
  }

  for (const list of source) {
    for (const num of list) {
      if (targetMap.has(num)) {
        targetMap.set(num, targetMap.get(num) - 1)
        if (targetMap.get(num) === 0) targetMap.delete(num)
      }
    }
  }

  let count = 0

  for (const val of targetMap.values()) {
    count += val
  }

  return count
}
