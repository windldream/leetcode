/**
 * @param {number[]} persons
 * @param {number[]} times
 */
var TopVotedCandidate = function (persons, times) {
  const map = new Map()
  const list = []
  let maxCount = 0
  let person = -1

  for (const per of persons) {
    if (!map.has(per)) map.set(per, 0)
    map.set(per, map.get(per) + 1)

    if (map.get(per) >= maxCount) {
      maxCount = map.get(per)
      person = per
    }

    list.push(person)
  }

  this.list = list
  this.times = times
}

/**
 * @param {number} t
 * @return {number}
 */
TopVotedCandidate.prototype.q = function (t) {
  let l = 0
  let r = this.times.length - 1
  let idx = -1

  while (l <= r) {
    const mid = (l + r) >> 1

    if (this.times[mid] <= t) {
      idx = mid
      l = mid + 1
    } else {
      r = mid - 1
    }
  }

  return this.list[idx]
}

/**
 * Your TopVotedCandidate object will be instantiated and called as such:
 * var obj = new TopVotedCandidate(persons, times)
 * var param_1 = obj.q(t)
 */
