/**
 * @param {number[]} persons
 * @param {number[]} times
 */
var TopVotedCandidate = function (persons, times) {
  const map = new Map()
  const res = []
  let maxCount = 0
  let person = 0
  for (let i = 0; i < persons.length; i++) {
    if (!map.get(persons[i])) {
      map.set(persons[i], 0)
    }
    map.set(persons[i], map.get(persons[i]) + 1)
    if (map.get(persons[i]) >= maxCount) {
      maxCount = map.get(persons[i])
      person = persons[i]
    }
    res.push(person)
  }

  this.persons = persons
  this.times = times
  this.map = map
  this.res = res
}

/**
 * @param {number} t
 * @return {number}
 */
TopVotedCandidate.prototype.q = function (t) {
  let i = 0
  while (i < this.times.length && this.times[i] <= t) {
    i++
  }
  return this.res[i - 1]
}

/**
 * Your TopVotedCandidate object will be instantiated and called as such:
 * var obj = new TopVotedCandidate(persons, times)
 * var param_1 = obj.q(t)
 */
