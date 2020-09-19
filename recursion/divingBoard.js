/**
 * @param {number} shorter
 * @param {number} longer
 * @param {number} k
 * @return {number[]}
 */
var divingBoard = function (shorter, longer, k) {
  if (k === 0) return []
  if (shorter === longer) return [shorter * k]

  const set = new Set()
  const visited = new Set()
  recursion(shorter, longer, k, 0, visited, set)
  return [...set]

  function recursion(shorter, longer, k, len, visited, set) {
    if (k === 0) {
      set.add(len)
      return
    }
    const key = k + ' ' + len
    if (visited.has(key)) return
    recursion(shorter, longer, k - 1, len + shorter, visited, set)
    recursion(shorter, longer, k - 1, len + longer, visited, set)
    visited.add(key)
  }
}
