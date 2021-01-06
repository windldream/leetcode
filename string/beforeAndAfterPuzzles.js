/**
 * @param {string[]} phrases
 * @return {string[]}
 */
const beforeAndAfterPuzzles = function(phrases) {
  const ans = []
  const len = phrases.length
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      if (i === j) continue
      const start = phrases[i].lastIndexOf(' ')
      const end = phrases[j].indexOf(' ')
      if (start !== -1 && end !== -1) {
        if (phrases[i].substring(start + 1) === phrases[j].substring(0, end)) {
          const word = phrases[i] + ' ' + phrases[j].substring(end + 1)
          if (!ans.includes(word)) ans.push(word)
        }
      } else if (start !== -1) {
        if (phrases[i].substring(start + 1) === phrases[j]) {
          if (!ans.includes(phrases[i])) ans.push(phrases[i])
        }
      } else if (end !== -1) {
        if (phrases[i] === phrases[j].substring(0, end)) {
          if (!ans.includes(phrases[j])) ans.push(phrases[j])
        }
      } else {
        if (phrases[i] === phrases[j]) {
          if (!ans.includes(phrases[i])) ans.push(phrases[i])
        }
      }
    }
  }
  return ans.sort()
};