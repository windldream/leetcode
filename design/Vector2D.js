/**
 * @param {number[][]} v
 */
const Vector2D = function (v) {
  this.index = 0
  this.len = v.reduce((prev, cur) => prev + cur.length, 0)
  this.list = iterator(v)

  function* iterator(v) {
    for (let i = 0; i < v.length; i++) {
      yield* v[i]
    }
  }
}

/**
 * @return {number}
 */
Vector2D.prototype.next = function* () {
  this.index++
  return this.list.next().value
}

/**
 * @return {boolean}
 */
Vector2D.prototype.hasNext = function () {
  return this.index < this.len
}

/**
 * Your Vector2D object will be instantiated and called as such:
 * var obj = new Vector2D(v)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */

const iterator = new Vector2D([[1, 2], [3], [4]])

console.log(iterator.next())
