/**
 * @param {number} n
 */
const OrderedStream = function(n) {
  this.stream = Array(n).fill('')
  this.ptr = 0
};

/**
 * @param {number} id
 * @param {string} value
 * @return {string[]}
 */
OrderedStream.prototype.insert = function(id, value) {
  this.stream[id - 1] = value
  const ans = []
  for (let i = this.ptr; i < this.stream.length; i++) {
    if (this.stream[i] === '') break
    this.ptr++
    ans.push(this.stream[i])
  }
  return ans
};

/**
 * Your OrderedStream object will be instantiated and called as such:
 * var obj = new OrderedStream(n)
 * var param_1 = obj.insert(id,value)
 */