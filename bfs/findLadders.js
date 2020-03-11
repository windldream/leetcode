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
  startSet.add(beginWord);
  bfs(startSet, endWord, map, set);
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

  function bfs(startSet, endWord, map, set) {
    if (startSet.size === 0) return 0;

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
            if (w === endWord) {
              isFinish = true;
            } else {
              temp.add(w);
            }
            if (map.get(s)) {
              map.get(s).add(w);
            } else {
              map.set(s, new Set());
              map.get(s).add(w);
            }
          }
        }
        sArr[i] = old;
      }
    }
    if (!isFinish) {
      bfs(temp, endWord, map, set);
    }
  }
};
