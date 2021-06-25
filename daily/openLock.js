/**
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */
var openLock = function (deadends, target) {
  if (deadends.includes('0000') || deadends.includes(target)) return -1
  let queue = [target]
  const visited = new Set(deadends)
  visited.add(target)
  let ans = 0
  while (queue.length) {
    const len = queue.length
    const temp = []
    for (let i = 0; i < len; i++) {
      const num = queue[i]
      if (num === '0000') return ans
      for (let j = 0; j < 4; j++) {
        let leftNum = +num[j] + 1
        if (leftNum > 9) leftNum = 0
        let rightNum = +num[j] - 1
        if (rightNum < 0) rightNum = 9
        const newNum1 = num.slice(0, j) + leftNum + num.slice(j + 1)
        const newNum2 = num.slice(0, j) + rightNum + num.slice(j + 1)
        if (!visited.has(newNum1)) {
          temp.push(newNum1)
          visited.add(newNum1)
        }
        if (!visited.has(newNum2)) {
          temp.push(newNum2)
          visited.add(newNum2)
        }
      }
    }
    queue = temp
    ans++
  }
  return -1
}
