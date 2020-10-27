/**
 * @param {string} text
 * @return {number}
 */
var distinctEchoSubstrings = function (text) {
  const len = text.length
  const ans = new Set()
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j <= len; j++) {
      const str = text.substring(i, j)
      if (check(str)) ans.add(str)
    }
  }
  return ans.size

  function check(str) {
    if (str.length & 1) return false
    return str === str.substr(0, str.length >> 1).repeat(2)
  }
}

distinctEchoSubstrings('aaaaaaaaaa')
