/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const map = new Map()
  for (const str of strs) {
    const temp = []
    for (const c of str) {
      temp.push(c)
    }
    const key = temp.sort().join('')
    if (!map.has(key)) {
      map.set(key, [])
    }
    map.get(key).push(str)
  }

  return [...map.values()]
}
