/**
 * @param {number[]} questions
 * @return {number}
 */
var halfQuestions = function (questions) {
  const countMap = new Map()
  for (const num of questions) {
    countMap.set(num, (countMap.get(num) || 0) + 1)
  }

  let n = questions.length >> 1
  const keys = [...countMap.keys()].sort((a, b) => countMap.get(b) - countMap.get(a))
  let ans = 0
  for (let i = 0; i < keys.length; i++) {
    n -= countMap.get(keys[i])
    ans++
    if (n <= 0) return ans
  }
}
