/**
 * @param {number} k
 * @param {number[]} arrival
 * @param {number[]} load
 * @return {number[]}
 */
var busiestServers = function (k, arrival, load) {
  const len = arrival.length
  if (len <= k)
    return Array(len)
      .fill(0)
      .map((val, index) => index)

  let i = 0
  const map = new Map()
  while (i < len) {
    const num = i % k
    if (!map.has(num)) {
      map.set(num, {
        time: arrival[i] + load[i],
        count: 1
      })
    } else {
      if (arrival[i] >= map.get(num).time) {
        map.set(num, {
          time: arrival[i] + load[i],
          count: map.get(num).count + 1
        })
      } else {
        let j
        if (num === k - 1) {
          j = 0
        } else {
          j = num + 1
        }
        while (j !== num) {
          if (arrival[i] >= map.get(j).time) {
            map.set(j, {
              time: arrival[i] + load[i],
              count: map.get(j).count + 1
            })
            break
          }

          if (j === k - 1) {
            j = 0
          } else {
            j++
          }
        }
      }
    }
    i++
  }

  const keys = [...map.keys()].sort((a, b) => map.get(b).count - map.get(a).count)
  const ans = [keys[0]]
  for (let i = 1; i < keys.length; i++) {
    if (map.get(keys[i]).count !== map.get(keys[0]).count) break
    ans.push(keys[i])
  }
  return ans
}

busiestServers(
  13,
  [1, 3, 6, 7, 8, 9, 10, 14, 16, 20, 21, 24, 25, 28, 29, 30, 33, 34],
  [20, 27, 27, 14, 14, 9, 15, 8, 23, 1, 34, 2, 28, 25, 7, 6, 24, 15]
)
