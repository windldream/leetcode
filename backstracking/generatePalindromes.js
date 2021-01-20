/**
 * @param {string} s
 * @return {string[]}
 */
const generatePalindromes = function (s) {
  const counter = new Map()
  for (const str of s) {
    counter.set(str, (counter.get(str) || 0) + 1)
  }
  const len = s.length
  let odd = 0
  for (const [key, val] of counter) {
    if (val & 1) {
      odd += 1
    }
  }
  if (len & 1) {
    if (odd > 1) return []
  } else {
    if (odd > 0) return []
  }

  const ans = new Set()
  const path = Array(len).fill('')
  backtracking(path, 0, len - 1)
  return [...ans]

  function backtracking(path, l, r) {
    if (l > r) {
      ans.add(path.join(''))
      return
    }
    for (const [str, val] of counter) {
      if (l < r) {
        if (val >= 2) {
          path[l] = str
          path[r] = str
          counter.set(str, val - 2)
          backtracking(path, l + 1, r - 1)
          path[l] = ''
          path[r] = ''
          counter.set(str, val)
        }
      } else {
        if (val >= 1) {
          path[l] = str
          counter.set(str, val - 1)
          backtracking(path, l + 1, r)
          path[l] = ''
          counter.set(str, val)
        }
      }
    }
  }
}

generatePalindromes('aabb')
