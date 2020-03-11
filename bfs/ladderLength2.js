/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
  const stack = [];
  const visited = new Set();
  const wildCardToWordList = createWildCardToWordMap([beginWord, ...wordList]);
  let res = 0;
  stack.push(beginWord);
  visited.add(beginWord);

  while (stack.length) {
    const len = stack.length;
    for (let i = 0; i < len; i++) {
      const word = stack.shift();
      if (word === endWord) {
        return res + 1;
      }
      const words = getValidWords(word, wildCardToWordList);
      for (let w of words) {
        if (visited.has(w)) continue;
        stack.push(w);
        visited.add(w);
      }
    }
    res++;
  }
  return 0;

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
