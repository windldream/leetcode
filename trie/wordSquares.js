/**
 * @param {string[]} words
 * @return {string[][]}
 */
const wordSquares = function(words) {
  const ans = []
  const prefixHashTable = buildPrefixHashTable(words)
  const n = words[0].length
  for (const word of words) {
    const wordSquares = [word]
    backtracking(1, wordSquares)
  }
  return ans

  function backtracking(step, wordSquares) {
    if (step === n) {
      ans.push(wordSquares.slice())
      return
    }
    let prefix = ''
    for (const word of wordSquares) {
      prefix += word[step]
    }
    const candidates = prefixHashTable.has(prefix) ? prefixHashTable.get(prefix) : []
    for (const candidate of candidates) {
      wordSquares.push(candidate)
      backtracking(step + 1, wordSquares)
      wordSquares.pop()
    }
  }

  function buildPrefixHashTable(words) {
    const prefixHashTable = new Map()
    const len = words[0].length
    for (const word of words) {
      for (let i = 1; i < len; i++) {
        const prefix = word.substring(0, i)
        if (!prefixHashTable.has(prefix)) {
          prefixHashTable.set(prefix, new Set())
        }
        prefixHashTable.get(prefix).add(word)
      }
    }
    return prefixHashTable
  }
};