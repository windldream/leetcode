/**
 * @param {string} characters
 * @param {number} combinationLength
 */
var CombinationIterator = function (characters, combinationLength) {
  this.chars = []
  backtrack(this.chars, [], 0, characters)

  function backtrack(chars, track, start, characters) {
    if (track.length === combinationLength) {
      chars.push(track.join(''))
      return
    }
    for (let i = start; i < characters.length; i++) {
      track.push(characters[i])
      backtrack(chars, track, start + 1, characters)
      track.pop()
    }
  }
}

/**
 * @return {string}
 */
CombinationIterator.prototype.next = function () {
  return this.chars.shift()
}

/**
 * @return {boolean}
 */
CombinationIterator.prototype.hasNext = function () {
  return this.chars.length
}

/**
 * Your CombinationIterator object will be instantiated and called as such:
 * var obj = new CombinationIterator(characters, combinationLength)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */
