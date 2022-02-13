/**
 * @param {number} n
 * @param {number[][]} meetings
 * @param {number} firstPerson
 * @return {number[]}
 */
var findAllPeople = function (n, meetings, firstPerson) {
  meetings.sort((a, b) => a[2] - b[2])

  const m = meetings.length
  const unionFind = Array(n)
    .fill(0)
    .map((val, idx) => idx)
  unionFind[firstPerson] = 0

  for (let i = 0; i < m; i++) {
    let j = i + 1

    while (j < m) {
      if (meetings[i][2] !== meetings[j][2]) break
      j++
    }

    for (let k = i; k < j; k++) {
      union(meetings[k][0], meetings[k][1])
    }

    for (let k = i; k < j; k++) {
      if (find(meetings[k][0]) !== 0) {
        isolate(meetings[k][0])
        isolate(meetings[k][1])
      }
    }

    i = j - 1
  }

  const ans = []

  for (let i = 0; i < n; i++) {
    if (find(i) === 0) ans.push(i)
  }

  return ans

  function union(x, y) {
    x = find(x)
    y = find(y)
    if (x > y) {
      ;[x, y] = [y, x]
    }
    unionFind[y] = x
  }

  function find(x) {
    const y = unionFind[x]
    return x === y ? x : (unionFind[x] = find(y))
  }

  function isolate(x) {
    if (x !== unionFind[x]) {
      unionFind[x] = x
    }
  }
}
