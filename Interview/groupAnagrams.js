/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const counterMap = new Map()
  for (const str of strs) {
    const s = transfer(str)
    if (!counterMap.has(s)) {
      counterMap.set(s, [])
    }
    counterMap.get(s).push(str)
  }
  return [...counterMap.values()]

  function transfer(str) {
    return str.split('').sort().join('')
  }
}
