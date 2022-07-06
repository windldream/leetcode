/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function (beginWord, endWord, wordList) {
  const visited = new Set()
  let queue = [beginWord]
  let step = 0
  visited.add(beginWord)
  wordList = new Set(wordList)

  while (queue.length) {
    step++
    const temp = []

    for (let i = 0, len = queue.length; i < len; i++) {
      const cur = queue[i]
      if (cur === endWord) return step

      for (const word of nextWord(cur, wordList)) {
        if (!visited.has(word)) {
          temp.push(word)
          visited.add(word)
        }
      }
    }

    queue = temp
  }

  return 0

  function nextWord(str, words) {
    const list = new Set()
    const base = 'a'.charCodeAt()

    for (let i = 0; i < str.length; i++) {
      for (let j = 0; j < 26; j++) {
        const char = String.fromCharCode(j + base)
        const next = str.slice(0, i) + char + str.slice(i + 1)
        if (str[i] !== char && words.has(next)) list.add(next)
      }
    }

    return list
  }
}
