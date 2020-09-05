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
    this.map.set(key, {})
  }
  const obj = this.map.get(key)
  obj[timestamp] = value
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
    const obj = this.map.get(key)
    if (obj[timestamp]) return obj[timestamp]
    const keys = Object.keys(obj)
    let index = keys.findIndex((val) => val >= timestamp)
    if (keys[index] > timestamp) {
      index--
    } else if (index === -1) {
      index = keys.length - 1
    }
    // if (keys.length && timestamp >= keys[keys.length - 1]) {
    //   return obj[keys[keys.length - 1]]
    // }
    // let lo = 0
    // let hi = keys.length - 1
    // while (lo < hi) {
    //   const mid = lo + ((hi - lo) >> 1)
    //   if (keys[mid] <= timestamp) {
    //     hi = mid
    //   } else {
    //     lo = mid + 1
    //   }
    // }
    return keys[index] <= timestamp ? obj[keys[index]] : ''
  }
}

/**
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */
