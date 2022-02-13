/**
 * @param {string[]} words
 * @return {number[]}
 */
var groupStrings = function (words) {
  const baseCode = 'a'.charCodeAt()
  const unionFind = Object.create(null)
  const size = Object.create(null)
  let group = words.length
  let maxSize = 1

  for (const word of words) {
    let x = 0

    for (const ch of word) {
      x |= 1 << (ch.charCodeAt() - baseCode)
    }

    unionFind[x] = x
    if (size[x] === undefined) size[x] = 0
    size[x] += 1
    maxSize = Math.max(maxSize, size[x])
    if (size[x] > 1) group--
  }

  for (const x of Object.keys(unionFind)) {
    for (let i = 0; i < 26; i++) {
      union(x, x ^ (1 << i))
      if (((x >> i) & 1) === 1) {
        for (let j = 0; j < 26; j++) {
          if (((x >> j) & 1) === 0) {
            union(x, x ^ ((1 << i) | (1 << j)))
          }
        }
      }
    }
  }

  return [group, maxSize]

  function find(x) {
    const y = unionFind[x]
    return y === x ? x : (unionFind[x] = find(y))
  }

  function union(x, y) {
    if (!unionFind[y]) return
    x = find(x)
    y = find(y)
    if (x === y) return

    unionFind[y] = x
    size[x] += size[y]
    maxSize = Math.max(maxSize, size[x])
    group--
  }
}
