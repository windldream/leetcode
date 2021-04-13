/**
 * @param {string} s
 * @return {boolean}
 */
var canPermutePalindrome = function (s) {
  const counter = new Map()
  for (const c of s) {
    counter.set(c, (counter.get(c) || 0) + 1)
  }

  return [...counter.keys()].filter((key) => counter.get(key) & 1).length <= 1
}

canPermutePalindrome('tactcoa')
