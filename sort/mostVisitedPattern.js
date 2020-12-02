/**
 * @param {string[]} username
 * @param {number[]} timestamp
 * @param {string[]} website
 * @return {string[]}
 */
var mostVisitedPattern = function (username, timestamp, website) {
  const websiteMap = new Map()
  const len = username.length
  for (let i = 0; i < len; i++) {
    const user = username[i]
    if (!websiteMap.has(user)) {
      websiteMap.set(user, [])
    }
    websiteMap.get(user).push([timestamp[i], website[i]])
  }

  const map = new Map()
  for (const [user, list] of websiteMap) {
    if (list.length < 3) continue
    list.sort((a, b) => a[0] - b[0])
    const m = list.length
    const seen = new Set()
    for (let i = 0; i < m - 2; i++) {
      for (let j = i + 1; j < m - 1; j++) {
        for (let k = j + 1; k < m; k++) {
          const key = list[i][1] + '&' + list[j][1] + '&' + list[k][1]
          if (!seen.has(key)) {
            if (!map.has(key)) {
              map.set(key, 0)
            }
            map.set(key, map.get(key) + 1)
            seen.add(key)
          }
        }
      }
    }
  }

  let maxSize = 0
  let ans = 0
  for (const [key, count] of map) {
    if (count > maxSize) {
      maxSize = count
      ans = key
    } else if (count === maxSize) {
      if (compare(key, ans)) {
        ans = key
      }
    }
  }
  return ans.split('&')

  function compare(a, b) {
    const [x1, y1, z1] = a.split('&')
    const [x2, y2, z2] = b.split('&')
    if (x1 === x2) {
      if (y1 === y2) {
        return z1 < z2
      }
      return y1 < y2
    }
    return x1 < x2
  }
}

mostVisitedPattern(['u1', 'u1', 'u1', 'u2', 'u2', 'u2'], [1, 2, 3, 4, 5, 6], ['a', 'b', 'c', 'a', 'b', 'a'])
