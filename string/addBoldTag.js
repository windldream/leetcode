/**
 * @param {string} s
 * @param {string[]} dict
 * @return {string}
 */
const addBoldTag = function (s, dict) {
  const n = s.length
  const mask = Array(n).fill(false)
  for (let i = 0; i < n; i++) {
    const prefix = s.substring(i)
    for (const word of dict) {
      if (prefix.startsWith(word)) {
        for (let j = i; j < i + word.length; j++) {
          mask[j] = true
        }
      }
    }
  }

  let ans = ''
  for (let i = 0; i < n; i++) {
    if (mask[i] && (i === 0 || !mask[i - 1])) {
      ans += '<b>'
    }
    ans += s[i]
    if (mask[i] && (i === n - 1 || !mask[i + 1])) {
      ans += '</b>'
    }
  }
  return ans
}

addBoldTag('abcxyz123', ['abc', '123'])
