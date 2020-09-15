/**
 * @param {string} licensePlate
 * @param {string[]} words
 * @return {string}
 */
var shortestCompletingWord = function (licensePlate, words) {
  const map = new Map()
  const reg = /[A-Za-z]/
  for (let c of licensePlate) {
    if (reg.test(c)) {
      c = c.toLowerCase()
      if (!map.has(c)) {
        map.set(c, 0)
      }
      map.set(c, map.get(c) + 1)
    }
  }

  let ans = ''
  let minLen = Infinity
  for (let i = 0; i < words.length; i++) {
    if (check(map, words[i])) {
      if (words[i].length < minLen) {
        minLen = words[i].length
        ans = words[i]
      }
    }
  }
  return ans

  function check(map, str) {
    const countMap = new Map()
    for (const c of str) {
      if (!countMap.has(c)) {
        countMap.set(c, 0)
      }
      countMap.set(c, countMap.get(c) + 1)
    }

    for (const [key, val] of map) {
      if (!countMap.has(key) || countMap.get(key) < val) return false
    }
    return true
  }
}

shortestCompletingWord('1s3 PSt', ['step', 'steps', 'stripe', 'stepple'])
