function format(timestamp, gra = 5, end = false) {
  const times = timestamp.split(':')
  let res = ['1999', '00', '01', '00', '00', '00']
  for (let i = 0; i <= gra; i++) {
    res[i] = times[i]
  }
  res = res.map(val => parseInt(val, 10))
  if (end) {
    res[gra] += 1
  }
  res[1] -= res[1] === 0 ? 0 : 1
  return res
}

const LogSystem = function () {
  this.logMap = new Map()
  this.gra = {
    Year: 0,
    Month: 1,
    Day: 2,
    Hour: 3,
    Minute: 4,
    Second: 5
  }
}

/**
 * @param {number} id
 * @param {string} timestamp
 * @return {void}
 */
LogSystem.prototype.put = function (id, timestamp) {
  this.logMap.set(id, timestamp)
}

/**
 * @param {string} start
 * @param {string} end
 * @param {string} granularity
 * @return {number[]}
 */
LogSystem.prototype.retrieve = function (start, end, granularity) {
  const gra = this.gra[granularity]
  const s = format(start, gra)
  const e = format(end, gra, true)
  const sTimestamp = new Date(...s).getTime()
  const eTimestamp = new Date(...e).getTime()
  const ans = []
  for (const [id, timestamp] of this.logMap) {
    const time = new Date(...format(timestamp)).getTime()
    if (time >= sTimestamp && time < eTimestamp) ans.push(id)
  }
  return ans
}

/**
 * Your LogSystem object will be instantiated and called as such:
 * var obj = new LogSystem()
 * obj.put(id,timestamp)
 * var param_2 = obj.retrieve(start,end,granularity)
 */
