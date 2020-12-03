/**
 * @param {string} target
 * @param {string[]} dictionary
 * @return {string}
 */
var minAbbreviation = function (target, dictionary) {
  const n = target.length
  const m = 1 << n
  const newDict = []
  for (const w of dictionary) {
    if (w.length === n) {
      newDict.push(w)
    }
  }

  if (newDict.length === 0) {
    return '' + n
  }
  let res = ''
  let max = Infinity
  for (let i = 0; i < m; i++) {
    const indices = []
    for (let j = 0; j < n; j++) {
      if (i & (1 << j)) {
        indices.push(j)
      }
    }

    let match = true
    for (const w of newDict) {
      let allSame = true
      for (const j of indices) {
        if (w[j] !== target[j]) {
          allSame = false
          break
        }
      }

      if (allSame) {
        match = false
        break
      }
    }

    if (!match) continue
    const p = generateAbbr(target, indices)
    if (p[1] < max) {
      res = p[0]
      max = p[1]
    }
  }

  return res

  function generateAbbr(w, indices) {
    if (indices.length === 0) return [w.length + '', 1]
    let str = ''
    let cnt = 0
    let prevInd = -1
    for (const ind of indices) {
      if (ind > prevInd + 1) {
        str += ind - prevInd - 1 + ''
        cnt++
      }
      str += w[ind]
      cnt++
      prevInd = ind
    }
    if (w.length > indices[indices.length - 1] + 1) {
      str += w.length - indices[indices.length - 1] - 1 + ''
      cnt++
    }

    return [str, cnt]
  }
}

minAbbreviation('usaandchinaarefriends', [])
