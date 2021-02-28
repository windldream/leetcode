/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
var countMatches = function (items, ruleKey, ruleValue) {
  let ans = 0
  let index = ['type', 'color', 'name'].indexOf(ruleKey)
  for (const item of items) {
    if (ruleValue === item[index]) ans++
  }
  return ans
}
