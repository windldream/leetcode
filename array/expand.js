/**
 * @param {string} s
 * @return {string[]}
 */
var expand = function (s) {
  const len = s.length
  if (len === 0) return []
  const left = []
  let l = ''
  let start = -1
  let end = -1
  for (let i = 0; i < len; i++) {
    if (s[i] === '{') {
      start = i
    } else if (s[i] === '}') {
      end = i
      break
    } else if (start === -1) {
      l += s[i]
    }
  }

  if (end !== -1) {
    for (let i = start + 1; i < end; i++) {
      if (s[i] === ',') continue
      left.push(l + s[i])
    }
  } else {
    return [l]
  }

  const right = expand(s.substring(end + 1))
  if (right.length === 0) return left

  const ans = []
  for (let str of left) {
    for (const r of right) {
      ans.push(str + r)
    }
  }
  return ans.sort()
}

expand('{a,b}c{d,e}f')
