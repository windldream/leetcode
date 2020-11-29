/**
 * @param {string} s
 * @return {number}
 */
var minDeletions = function (s) {
  const map = new Map()
  for (const c of s) {
    if (!map.has(c)) {
      map.set(c, 0)
    }
    map.set(c, map.get(c) + 1)
  }

  const values = [...map.values()].sort((a, b) => b - a)
  let ans = 0
  for (let i = 1; i < values.length; i++) {
    if (values.indexOf(values[i]) !== values.lastIndexOf(values[i])) {
      let val = values[i]
      while (values.includes(val) && val !== 0) {
        val -= 1
        ans++
      }
      values[i] = val
    }
  }
  return ans
}

minDeletions('bbcebab')
