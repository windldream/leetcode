/**
 * @param {string[]} words
 * @return {string}
 */
const alienOrder = function (words) {
  const g = new Map()
  const len = words.length

  for (let i = 0; i < len - 1; i++) {
    const maxLen = Math.max(words[i].length, words[i + 1].length)

    for (let j = 0; j < maxLen; j++) {
      if (j >= words[i].length) break

      if (j >= words[i + 1].length) return ''

      if (words[i][j] !== words[i + 1][j]) {
        if (!g.has(words[i][j])) g.set(words[i][j], new Set())
        g.get(words[i][j]).add(words[i + 1][j])
        break
      }
    }
  }

  const deg = Array(26).fill(-1)
  const baseCode = 'a'.charCodeAt()

  for (const word of words) {
    for (const s of word) {
      deg[s.charCodeAt() - baseCode] = 0
    }
  }

  for (const [key, list] of g) {
    for (const s of list) {
      deg[s.charCodeAt() - baseCode] += 1
    }
  }

  const queue = []
  let count = 0

  for (let i = 0; i < 26; i++) {
    if (deg[i] !== -1) count++

    if (deg[i] === 0) queue.push(String.fromCharCode(i + baseCode))
  }

  let ans = ''

  while (queue.length) {
    const len = queue.length

    for (let i = 0; i < len; i++) {
      const s = queue.shift()
      ans += s

      if (g.has(s)) {
        for (const next of g.get(s)) {
          const index = next.charCodeAt() - 'a'.charCodeAt()
          deg[index] -= 1

          if (deg[index] === 0) queue.push(next)
        }
      }
    }
  }

  return ans.length !== count ? '' : ans
}
