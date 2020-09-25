/**
 * @param {string} s
 * @return {string[]}
 */
var maxNumOfSubstrings = function (s) {
  const subs = Array(26)
    .fill(0)
    .map((val, index) => {
      const item = []
      const c = String.fromCharCode('a'.charCodeAt() + index)
      item[0] = Infinity
      if (s.includes(c)) {
        item[1] = s.indexOf(c)
        item[2] = s.lastIndexOf(c)
        item[0] = item[2] - item[1] + 1
      }
      return item
    })

  for (let i = 0; i < subs.length; i++) {
    if (subs[i].length === 1) continue
    subs[i] = getFullSub(subs, s, subs[i][1], subs[i][2])
  }

  subs.sort((a, b) => a[0] - b[0])
  const ans = []
  const seen = new Set()
  outer: for (const sub of subs) {
    if (sub.length === 1) break
    for (let j = sub[1]; j <= sub[2]; j++) {
      // 该索引已被访问过
      if (seen.has(j)) continue outer
    }
    for (let j = sub[1]; j <= sub[2]; j++) {
      seen.add(j)
    }
    ans.push(s.substr(sub[1], sub[0]))
  }
  return ans

  function getFullSub(subs, s, l, r) {
    for (let i = l + 1; i < r; i++) {
      const n = s[i].charCodeAt() - 'a'.charCodeAt()
      if (l <= subs[n][1] && r >= subs[n][2]) continue
      l = Math.min(l, subs[n][1])
      r = Math.max(r, subs[n][2])
      i = l
    }
    return [r - l + 1, l, r]
  }
}

maxNumOfSubstrings('adefaddaccc')
