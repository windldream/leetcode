/**
 * @param {string[]} keyName
 * @param {string[]} keyTime
 * @return {string[]}
 */
var alertNames = function (keyName, keyTime) {
  const map = new Map()
  for (let i = 0; i < keyName.length; i++) {
    if (!map.has(keyName[i])) {
      map.set(keyName[i], [])
    }
    map.get(keyName[i]).push(transTime(keyTime[i]))
  }

  const ans = []
  for (const [name, times] of map) {
    if (times.length >= 3 && !isValid(times)) {
      ans.push(name)
    }
  }

  ans.sort()
  return ans

  function isValid(times) {
    times.sort((a, b) => a - b)
    for (let i = 2; i < times.length; i += 1) {
      if (times[i] - times[i - 2] <= 60) return false
    }
    return true
  }

  function transTime(time) {
    const [h, m] = time.split(':')
    return h * 60 + +m
  }
}

alertNames(
  ['daniel', 'daniel', 'daniel', 'luis', 'luis', 'luis', 'luis'],
  ['10:00', '10:40', '11:00', '09:00', '11:00', '13:00', '15:00']
)
