/**
 * @param {string[]} words
 * @return {string[]}
 */
var findAllConcatenatedWordsInADict = function (words) {
  const res = [],
    len = words.length;

  for (let s = 0; s < len; s++) {
    const n = words[s].length,
      dp = [];

    dp[0] = true;
    for (let i = 0; i < n; i++) {
      if (!dp[i]) {
        continue;
      }
      for (j = i + 1; j <= n; j++) {
        if (j - i < n && words.includes(words[s].substring(i, j))) {
          dp[j] = true;
        }
      }
      if (dp[n]) {
        res.push(words[s]);
        break;
      }
    }
  }

  return res;
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