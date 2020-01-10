/**
 * @param {string[]} words
 * @return {string[]}
 */
var findAllConcatenatedWordsInADict = function(words) {
  words = words.filter(word => word.length);
  const len = words.length,
    res = [],
    map = new Map();
  let minLen = 0;
  if (len > 0) {
    minLen = words.sort((a, b) => a.length - b.length)[0].length;
  }
  for (let i = 0; i < len; i++) {
    let newWords = words.slice();
    let target = newWords.splice(i, 1)[0];
    if (target < minLen * 2) {
      continue;
    }
    if (helper(newWords, target)) {
      res.push(target);
    }
  }
  return res;

  function helper(words, str) {
    if (words.includes(str) || str.length === '') {
      return true;
    }

    if (words.every(item => item.length >= str.length)) {
      return false;
    }

    words = words.filter(item => item.length < str.length);
    const len = words.length;

    if (!map.has(str)) {
      for (let i = 0; i < len; i++) {
        if (~str.indexOf(words[i])) {
          let index = str.indexOf(words[i]);
          let newStr = str
            .substring(0, index)
            .concat(str.substring(index + words[i].length));
          if (map.has(newStr)) {
            if (map.get(newStr)) {
              return map.get(newStr);
            } else {
              continue;
            }
          }
          if (helper(words, newStr)) {
            map.set(str, true);
            return true;
          }
        }
      }
      map.set(str, false);
    }

    return map.get(str);
  }
};

console.log(
  findAllConcatenatedWordsInADict([
    'cat',
    'cats',
    '',
    'catsdogcats',
    'dog',
    'dogcatsdog',
    'hippopotamuses',
    'rat',
    'ratcatdogcat'
  ])
);
