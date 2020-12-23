/**
 * @param {string[]} sentences
 * @param {number[]} times
 */
const AutocompleteSystem = function(sentences, times) {
  const map = new Map()
  for (let i = 0; i < sentences.length; i++) {
    map.set(sentences[i], times[i])
  }
  this.map = map
  this.strs = ''
};

/**
 * @param {character} c
 * @return {string[]}
 */
AutocompleteSystem.prototype.input = function(c) {
  if (c === '#') {
    this.map.set(this.strs, (this.map.get(this.strs) || 0) + 1)
    this.strs = ''
    return []
  }
  this.strs += c
  const ans = []
  for (const key of this.map.keys()) {
    if (key.startsWith(this.strs)) ans.push(key)
  }

  ans.sort((a, b) => {
    if (this.map.get(a) === this.map.get(b)) {
      return a.localeCompare(b)
    }
    return this.map.get(b) - this.map.get(a)
  })

  if (ans.length <= 3) {
    return ans
  }
  return ans.slice(0, 3)
};

/**
 * Your AutocompleteSystem object will be instantiated and called as such:
 * var obj = new AutocompleteSystem(sentences, times)
 * var param_1 = obj.input(c)
 */