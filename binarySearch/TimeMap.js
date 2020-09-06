/**
 * Initialize your data structure here.
 */
var TimeMap = function () {
  this.map = new Map()
}

/**
 * @param {string} key
 * @param {string} value
 * @param {number} timestamp
 * @return {void}
 */
TimeMap.prototype.set = function (key, value, timestamp) {
  if (!this.map.has(key)) {
    this.map.set(key, {
      v: [],
      t: []
    })
  }
  const obj = this.map.get(key)
  obj.t.push(timestamp)
  obj.v.push(value)
}

/**
 * @param {string} key
 * @param {number} timestamp
 * @return {string}
 */
TimeMap.prototype.get = function (key, timestamp) {
  if (!this.map.has(key)) {
    return ''
  } else {
    const { t, v } = this.map.get(key)
    const index = t.indexOf(timestamp)
    if (index > -1) {
      return v[index]
    }
    let i = t.findIndex((time) => time > timestamp)
    if (t[i] > timestamp) {
      i--
    } else if (i === -1) {
      i = t.length - 1
    }
    return t[i] <= timestamp ? v[i] : ''
  }
}

/**
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */
