/**
 * @param {number[][]} buildings
 * @return {number[][]}
 */
var getSkyline = function (buildings) {
  const map = new Map()
  for (const b of buildings) {
    if (!map.has(b[0])) {
      map.set(b[0], [])
    }
    if (!map.has(b[1])) {
      map.set(b[1], [])
    }
    map.get(b[0]).push(b)
    map.get(b[1]).push(b)
  }

  const maxHelp = []
  const res = []
  const keys = [...map.keys()].sort((a, b) => a - b)
  for (const l of keys) {
    const bs = map.get(l)
    for (const b of bs) {
      if (b[0] === l) {
        heapify(maxHelp, b)
      } else {
        remove(maxHelp, b)
      }
    }

    if (maxHelp.length === 0) {
      res.push([l, 0])
    } else {
      const maxHeight = maxHelp[0][2]
      if (res.length === 0 || res[res.length - 1][1] !== maxHeight) {
        res.push([l, maxHeight])
      }
    }
  }
  return res

  function heapify(arr, item) {
    if (arr.length === 0) {
      arr.push(item)
    } else {
      for (let i = 0; i < arr.length; i++) {
        if (arr[i][2] < item[2]) {
          arr.splice(i, 0, item)
          return
        }
      }
      arr.push(item)
    }
  }

  function remove(arr, item) {
    const index = arr.findIndex((a) => a.join('&') === item.join('&'))
    arr.splice(index, 1)
  }
}

getSkyline([
  [2, 9, 10],
  [3, 7, 15],
  [5, 12, 12],
  [15, 20, 10],
  [19, 24, 8]
])
