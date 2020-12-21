/**
 * @param {string[]} words
 */
const WordDistance = function(words) {
  const map = new Map()
  for (let i = 0; i < words.length; i++) {
    const word = words[i]
    if (!map.has(word)) {
      map.set(word, new Set())
    }
    map.get(word).add(i)
  }
  this.map = map
};

/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
WordDistance.prototype.shortest = function(word1, word2) {
  let dis = Infinity
  const word1Index = this.map.get(word1)
  const word2Index = this.map.get(word2)
  for (const i of word1Index) {
    for (const j of word2Index) {
      dis = Math.min(dis, Math.abs(i - j))
    }
  }
  return dis
};

/**
 * Your WordDistance object will be instantiated and called as such:
 * var obj = new WordDistance(words)
 * var param_1 = obj.shortest(word1,word2)
 */