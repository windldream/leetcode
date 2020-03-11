/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {string[][]}
 */
var findLadders = function(beginWord, endWord, wordList) {
  const res = [];
  const set = new Set(wordList);
  if (!set.has(endWord)) return res;

  const map = new Map();
  const startSet = new Set();
  const endSet = new Set();
  startSet.add(beginWord);
  endSet.add(endWord);
  bfs(startSet, endSet, map, set, false);

  const list = [];
  list.push(beginWord);
  dfs(res, list, beginWord, endWord, map);
  return res;

  function dfs(res, list, beginWord, endWord, map) {
    if (beginWord === endWord) {
      res.push(list.slice());
      return;
    }
    if (map.get(beginWord)) {
      for (const next of map.get(beginWord)) {
        list.push(next);
        dfs(res, list, next, endWord, map);
        list.pop();
      }
    }
  }

  function bfs(startSet, endSet, map, set, isReverse) {
    if (startSet.size === 0) return 0;

    if (startSet.size > endSet.size) {
      bfs(endSet, startSet, map, set, !isReverse);
      return;
    }

    const temp = new Set();
    let isFinish = false;
    for (const word of startSet) {
      set.delete(word);
    }

    for (const s of startSet) {
      const sArr = s.split('');
      for (let i = 0; i < sArr.length; i++) {
        const old = sArr[i];
        for (let c = 97; c <= 122; c++) {
          sArr[i] = String.fromCharCode(c);
          const w = sArr.join('');
          if (set.has(w)) {
            if (endSet.has(w)) {
              isFinish = true;
            } else {
              temp.add(w);
            }
            const key = isReverse ? w : s;
            const val = isReverse ? s : w;
            if (!map.get(key)) {
              map.set(key, new Set());
            }
            map.get(key).add(val);
          }
        }
        sArr[i] = old;
      }
    }
    if (!isFinish) {
      bfs(temp, endSet, map, set, isReverse);
    }
  }
};
