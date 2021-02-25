/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const map = new Map()
  for (const str of strs) {
    const s = transfrom(str)
    if (!map.has(s)) map.set(s, [])
    map.get(s).push(str)
  }
  return [...map.values()]

  function transfrom(str) {
    return str.split('').sort().join('')
  }
}
