/**
 * @param {number[]} array
 * @return {number[]}
 */
var subSort = function (array) {
  const incrQueue = []
  for (let i = 0; i < array.length; i++) {
    while (incrQueue.length && array[incrQueue[incrQueue.length - 1]] > array[i]) {
      incrQueue.pop()
    }
    incrQueue.push(i)
  }

  const descQueue = []
  for (let i = array.length - 1; i >= 0; i--) {
    while (descQueue.length && array[descQueue[descQueue.length - 1]] < array[i]) {
      descQueue.pop()
    }
    descQueue.push(i)
  }

  if (incrQueue.length === array.length) return [-1, -1]

  let m = -1
  let n = -1
  for (let i = 0; i < array.length; i++) {
    if (!incrQueue.includes(i)) {
      m = i
      break
    }
  }

  for (let i = array.length - 1; i >= 0; i--) {
    if (!descQueue.includes(i)) {
      n = i
      break
    }
  }

  return [m, n]
}
