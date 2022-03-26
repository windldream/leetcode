/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function (beginWord, endWord, wordList) {
  const queue = [beginWord]
  const visited = new Set()
  visited.add(beginWord)
  let step = 1

  while (queue.length) {
    let len = queue.length

    while (len > 0) {
      const word = queue.shift()

      if (word === endWord) return step

      queue.push(...similarWords(word, wordList, visited))
      len -= 1
    }

    step += 1
  }

  return 0

  function similarWords(str, words, visited) {
    const list = []
    const n = str.length

    outer: for (const word of words) {
      let count = 0

      for (let i = 0; i < n; i++) {
        if (word[i] !== str[i]) count += 1

        if (count > 1) continue outer
      }

      if (count === 1 && !visited.has(word)) {
        list.push(word)
        visited.add(word)
      }
    }

    return list
  }
}
