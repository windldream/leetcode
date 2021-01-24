/**
 * @param {string[][]} synonyms
 * @param {string} text
 * @return {string[]}
 */
const generateSentences = function (synonyms, text) {
  const texts = text.split(' ')
  const uf = {}
  const ans = []
  const all = new Set()
  for (const [u, v] of synonyms) {
    if (!uf[u]) uf[u] = u
    if (!uf[v]) uf[v] = v
    const x = find(u)
    const y = find(v)
    if (x !== y) {
      union(x, y)
    }
    all.add(u)
    all.add(v)
  }
  backtracking(0, [])
  return ans.sort()

  function backtracking(pos, str) {
    if (pos === texts.length) {
      ans.push(str.join(' '))
      return
    }

    let flag = true
    const u = find(texts[pos])
    for (const s of all) {
      const v = find(s)
      if (u === v) {
        flag = false
        str.push(s)
        backtracking(pos + 1, str)
        str.pop()
      }
    }

    if (flag) {
      str.push(texts[pos])
      backtracking(pos + 1, str)
      str.pop()
    }
  }

  function union(u, v) {
    uf[u] = v
  }

  function find(x) {
    if (uf[x] !== x) {
      uf[x] = find(uf[x])
    }
    return uf[x]
  }
}

generateSentences(
  [
    ['happy', 'joy'],
    ['sad', 'sorrow'],
    ['joy', 'cheerful']
  ],
  'I am happy today but was sad yesterday'
)
