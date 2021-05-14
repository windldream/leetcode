/**
 * @param {string} pattern
 * @param {string} value
 * @return {boolean}
 */
var patternMatching = function (pattern, value) {
  const m = pattern.length
  const n = value.length
  let countA = 0
  let countB = 0
  for (const c of pattern) {
    if (c === 'a') countA++
    else countB++
  }

  let p = pattern.split('')
  if (countA < countB) {
    const tmp = countA
    countA = countB
    countB = tmp
    for (let i = 0; i < m; i++) {
      p[i] = p[i] === 'a' ? 'b' : 'a'
    }
  }

  if (n === 0) return countB === 0

  for (let lenA = 0; lenA * countA <= n; lenA++) {
    const restLen = n - lenA * countA
    if ((countB === 0 && restLen === 0) || (countB !== 0 && restLen % countB === 0)) {
      const lenB = countB === 0 ? 0 : restLen / countB
      let pos = 0
      let a = ''
      let b = ''
      let valid = true

      for (const c of p) {
        if (c === 'a') {
          const sub = value.substr(pos, lenA)
          if (a.length === 0) a = sub
          else if (a !== sub) {
            valid = false
            break
          }
          pos += lenA
        } else {
          const sub = value.substr(pos, lenB)
          if (b.length === 0) b = sub
          else if (b !== sub) {
            valid = false
            break
          }
          pos += lenB
        }
      }

      if (valid && a !== b) return true
    }
  }

  return false
}

patternMatching('aaaa', 'dogcatcatdog')
