/**
 * @param {string} compressedString
 */
const StringIterator = function(compressedString) {
  const reg = /\d/
  const strings = []
  let i = 0
  let str = ''
  while (i < compressedString.length) {
    if (reg.test(compressedString[i])) {
      let num = 0
      while (reg.test(compressedString[i])) {
        num = num * 10 + +compressedString[i++]
      }
      strings.push([str, num])
      str = ''
    } else {
      str += compressedString[i++]
    }
  }
  this.it = iterator(strings)
  this.item = this.it.next()

  function* iterator(strings) {
    for (let i = 0; i < strings.length; i++) {
      let count = strings[i][1]
      while (count > 0) {
        yield strings[i][0]
        count--
      }
    }
  }

};

/**
 * @return {character}
 */
StringIterator.prototype.next = function() {
  if (!this.hasNext()) return ' '
  const value = this.item.value
  this.item = this.it.next()
  return value
};

/**
 * @return {boolean}
 */
StringIterator.prototype.hasNext = function() {
  return !this.item.done
};

/**
 * Your StringIterator object will be instantiated and called as such:
 * var obj = new StringIterator(compressedString)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */