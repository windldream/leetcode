/**
 * @param {string[]} wordlist
 * @param {string[]} queries
 * @return {string[]}
 */
var spellchecker = function (wordlist, queries) {
  const ans = []
  for (const query of queries) {
    if (wordlist.includes(query)) {
      ans.push(query)
      continue
    }
    const word = checkCase(wordlist, query) || checkVowel(wordlist, query)
    if (word) {
      ans.push(word)
    } else {
      ans.push('')
    }
  }
  return ans

  function checkCase(wordlist, query) {
    return wordlist.find((word) => word.toLowerCase() === query.toLowerCase())
  }

  function checkVowel(wordlist, query) {
    const vowels = ['a', 'e', 'i', 'o', 'u']
    label: for (let j = 0; j < wordlist.length; j++) {
      const word = wordlist[j].toLowerCase()
      if (word.length !== query.length) continue
      query = query.toLowerCase()
      for (let i = 0; i < word.length; i++) {
        if (word[i] !== query[i] && (!vowels.includes(word[i]) || !vowels.includes(query[i]))) {
          continue label
        }
      }
      return wordlist[j]
    }
  }
}
