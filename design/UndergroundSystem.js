var UndergroundSystem = function () {
  this.map = new Map()
  this.countMap = new Map()
}

/**
 * @param {number} id
 * @param {string} stationName
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkIn = function (id, stationName, t) {
  if (!this.map.has(id)) {
    this.map.set(id, [])
  }
  const arr = this.map.get(id)
  arr[0] = stationName
  arr[1] = t
}

/**
 * @param {number} id
 * @param {string} stationName
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkOut = function (id, stationName, t) {
  const [name, time] = this.map.get(id)
  if (!this.countMap.has(name + '->' + stationName)) {
    this.countMap.set(name + '->' + stationName, [])
  }
  this.countMap.get(name + '->' + stationName).push(t - time)
}

/**
 * @param {string} startStation
 * @param {string} endStation
 * @return {number}
 */
UndergroundSystem.prototype.getAverageTime = function (startStation, endStation) {
  const key = startStation + '->' + endStation
  if (!this.countMap.has(key)) return 0
  const list = this.countMap.get(key)
  const sum = list.reduce((prev, cur) => prev + cur)
  const len = list.length
  return sum / len
}

/**
 * Your UndergroundSystem object will be instantiated and called as such:
 * var obj = new UndergroundSystem()
 * obj.checkIn(id,stationName,t)
 * obj.checkOut(id,stationName,t)
 * var param_3 = obj.getAverageTime(startStation,endStation)
 */
