/**
 * @param {number[][]} people
 * @return {number[][]}
 */
var reconstructQueue = function (people) {
  people.sort((a, b) => {
    if (a[0] === b[0]) return a[1] - b[1]
    return b[0] - a[0]
  })
  const n = people.length
  const queue = []
  for (let i = 0; i < n; i++) {
    queue.splice(people[i][1], 0, people[i])
  }
  return queue
}

reconstructQueue([
  [2, 4],
  [3, 4],
  [9, 0],
  [0, 6],
  [7, 1],
  [6, 0],
  [7, 3],
  [2, 5],
  [1, 1],
  [8, 0]
])
