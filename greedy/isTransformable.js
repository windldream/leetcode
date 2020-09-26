/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isTransformable = function (s, t) {
  const len = s.length
  const pos = Array(10)
    .fill(0)
    .map(() => [])
  for (let i = 0; i < len; i++) {
    pos[s[i]].push(i)
  }
  for (let i = 0; i < len; i++) {
    if (pos[t[i]].length === 0) return false
    for (let j = 0; j < +t[i]; j++) {
      // t[i] 要想交换到前面 必须是满足小于s[t[i]]的所有字符都出现在s[t[i]]右侧
      if (pos[j].length && pos[j][0] < pos[t[i]][0]) return false
    }
    pos[t[i]].shift()
  }
  return true
}

isTransformable('84532', '34852')
