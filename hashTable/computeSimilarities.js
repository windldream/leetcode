/**
 * @param {number[][]} docs
 * @return {string[]}
 */
var computeSimilarities = function (docs) {
  const len = docs.length
  const arr = []
  for (const doc of docs) {
    const map = new Map()
    for (const c of doc) {
      map.set(c, 1)
    }
    arr.push(map)
  }

  const ans = []
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      const union = getUnion(arr[i], arr[j])
      const total = docs[i].length + docs[j].length - union
      if (union > 0) {
        ans.push(`${i},${j}: ${(union / total + 1e-9).toFixed(4)}`)
      }
    }
  }
  return ans

  function getUnion(a, b) {
    let count = 0
    for (const key of a.keys()) {
      if (b.has(key)) count++
    }
    return count
  }
}
