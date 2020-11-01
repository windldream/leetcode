/**
 * @param {string} pattern
 * @param {string} value
 * @return {boolean}
 */
var patternMatching = function (pattern, value) {
  let counta = 0
  let countb = 0
  for (const c of pattern) {
    if (c === 'a') {
      counta++
    } else {
      countb++
    }
  }

  if (counta < countb) {
    ;[counta, countb] = [countb, counta]
    let ch = ''
    for (const c of pattern) {
      ch += c === 'a' ? 'b' : 'a'
    }
    pattern = ch
  }

  const len = value.length

  if (len === 0) return countb === 0

  for (let i = 0; counta * i <= len; i++) {
    const rest = len - counta * i
    if ((countb === 0 && rest === 0) || (countb !== 0 && rest % countb === 0)) {
      const j = countb === 0 ? 0 : rest / countb
      let pos = 0
      let valid = true
      let a = ''
      let b = ''
      for (const c of pattern) {
        if (c === 'a') {
          const sub = value.substr(pos, i)
          if (a.length === 0) {
            a = sub
          } else if (a !== sub) {
            valid = false
            break
          }
          pos += i
        } else {
          const sub = value.substr(pos, j)
          if (b.length === 0) {
            b = sub
          } else if (b !== sub) {
            valid = false
            break
          }
          pos += j
        }
      }
      if (valid && a !== b) return true
    }
  }
  return false
}

patternMatching('baabab', 'eimmieimmieeimmiee')
