class Trie {
  constructor() {
    this.isLeaf = false
    this.childs = []
  }
}
/**
 * @param {string[]} words
 * @return {string[]}
 */
var maxRectangle = function (words) {
  // 构造字典树
  const root = new Trie()
  for (const str of words) {
    let node = root
    for (const c of str) {
      const index = c.charCodeAt() - 'a'.charCodeAt()
      if (!node.childs[index]) {
        node.childs[index] = new Trie()
      }
      node = node.childs[index]
    }
    node.isLeaf = true
  }

  const map = new Map()
  let ans = []
  let maxArea = 0
  let maxLength = 0
  for (const w of words) {
    const len = w.length
    maxLength = Math.max(maxLength, len)
    if (!map.has(len)) map.set(len, new Set())
    map.get(len).add(w)
  }

  for (const [key, set] of map) {
    backtracking(set, [], key)
  }
  return ans

  function backtracking(set, path, len) {
    if (len * maxLength <= maxArea) return
    if (path.length > maxLength) return
    for (const str of set) {
      path.push(str)
      const res = isValid(path)
      if (res[0]) {
        const area = path.length * path[0].length
        if (res[1] && area > maxArea) {
          maxArea = area
          ans = path.slice()
        }
        backtracking(set, path, len)
      }
      path.pop()
    }
  }

  function isValid(input) {
    let allLeaf = true
    const m = input.length
    const n = input[0].length
    // 横向的单词都是自己填的，只需要校验每列的单词就行了
    for (let j = 0; j < n; j++) {
      let node = root
      for (let i = 0; i < m; i++) {
        const index = input[i][j].charCodeAt() - 'a'.charCodeAt()
        if (!node.childs[index]) return [false, false]
        node = node.childs[index]
      }
      if (!node.isLeaf) allLeaf = false
    }
    return [true, allLeaf]
  }
}
