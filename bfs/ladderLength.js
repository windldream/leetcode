/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
  const stack = [];
  const visited = new Set();
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
      const words = getWords(wordList, word);
      for (let w of words) {
        if (visited.has(w)) continue;
        stack.push(w);
        visited.add(w);
      }
    }
    res++;
  }
  return 0;

  function getWords(wordList, word) {
    return wordList.filter(item => {
      let count = 0;
      for (let i = 0; i < word.length; i++) {
        if (word[i] !== item[i]) {
          count++;
        }
      }
      return count === 1;
    });
  }
};
