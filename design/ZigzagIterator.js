/**
 * @constructor
 * @param {Integer[]} v1
 * @param {Integer[]} v2
 */
const ZigzagIterator = function ZigzagIterator(v1, v2) {
  const list = []
  const n = v1.length
  const m = v2.length
  for (let i = 0; i < Math.min(n, m); i++) {
    list.push(v1[i], v2[i])
  }
  if (m > n) list.push(...v2.slice(n, m))
  if (n > m) list.push(...v1.slice(m, n))
  this.list = list
  this.index = 0
}

/**
 * @this ZigzagIterator
 * @returns {boolean}
 */
ZigzagIterator.prototype.hasNext = function hasNext() {
  return this.index < this.list.length
}

/**
 * @this ZigzagIterator
 * @returns {integer}
 */
ZigzagIterator.prototype.next = function next() {
  return this.list[this.index++]
}

/**
 * Your ZigzagIterator will be called like this:
 * var i = new ZigzagIterator(v1, v2), a = [];
 * while (i.hasNext()) a.push(i.next());
 */
