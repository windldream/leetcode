/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {string[]}
 */
var findLadders = function(beginWord, endWord, wordList) {
  const wildCardToWordList = createWildCardToWordMap(wordList);
  console.log(wildCardToWordList);
  const visited = new Set();
  return transform(visited, beginWord, endWord, wildCardToWordList);

  function transform(visited, begin, end, wordList) {
    if (begin === end) {
      const path = [];
      path.push(begin);
      return path;
    } else if (visited.has(begin)) {
      return [];
    }

    visited.add(begin);
    const words = getValidWords(begin, wordList);
    for (const word of words) {
      const path = transform(visited, word, end, wordList);
      if (path.length) {
        path.unshift(begin);
        return path;
      }
    }

    return [];
  }

  function createWildCardToWordMap(wordList) {
    const map = new Map();
    for (const word of wordList) {
      const linked = getWildcardRoots(word);
      for (const linkedWord of linked) {
        if (map.has(linkedWord)) {
          map.get(linkedWord).add(word);
        } else {
          map.set(linkedWord, new Set());
          map.get(linkedWord).add(word);
        }
      }
    }
    return map;
  }

  function getWildcardRoots(word) {
    const words = [];
    for (let i = 0; i < word.length; i++) {
      const str = word.substring(0, i) + '_' + word.substring(i + 1);
      words.push(str);
    }
    return words;
  }

  function getValidWords(word, wildCardToWords) {
    const wildcards = getWildcardRoots(word);
    const linkedWords = [];
    for (const wildcard of wildcards) {
      const words = wildCardToWords.get(wildcard);
      if (!words) continue;
      for (const linkedWord of words) {
        if (linkedWord !== word) {
          linkedWords.push(linkedWord);
        }
      }
    }
    return linkedWords;
  }
};
