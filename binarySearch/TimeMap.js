/**
 * Initialize your data structure here.
 */
var TimeMap = function () {
  this.m = new Map()
}

/**
 * @param {string} key
 * @param {string} value
 * @param {number} timestamp
 * @return {void}
 */
TimeMap.prototype.set = function (key, value, timestamp) {
  const m = this.m

  if (!m.has(key)) {
    m.set(key, {
      t: [],
      v: []
    })
  }

  const u = m.get(key)
  u.t.push(timestamp)
  u.v.push(value)
}

/**
 * @param {string} key
 * @param {number} timestamp
 * @return {string}
 */
TimeMap.prototype.get = function (key, timestamp) {
  // 找最大的 小于等于 timestamp
  const u = this.m.get(key)
  if (!u) {
    return ''
  }

  const { t, v } = u
  let l = 0
  let r = t.length - 1

  while (l <= r) {
    const m = Math.ceil((l + r) / 2)

    if (t[m] > timestamp) {
      r = m - 1
    } else {
      if (l === r) {
        return v[l]
      } else {
        l = m
      }
    }
  }

  return ''
}

/**
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */
