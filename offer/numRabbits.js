/**
 * @param {number[]} answers
 * @return {number}
 */
var numRabbits = function (answers) {
  const n = answers.length
  if (n === 0) return []

  const counterMap = new Map()
  for (const num of answers) {
    counterMap.set(num, (counterMap.get(num) || 0) + 1)
  }

  let ans = 0
  for (const [num, count] of counterMap) {
    if (count > num + 1) {
      const cnt = Math.ceil(count / (num + 1))
      ans += cnt * (num + 1)
    } else {
      ans += num + 1
    }
  }
  return ans
}
