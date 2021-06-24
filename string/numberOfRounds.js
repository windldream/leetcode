/**
 * @param {string} startTime
 * @param {string} finishTime
 * @return {number}
 */
var numberOfRounds = function (startTime, finishTime) {
  let [startH, startM] = startTime.split(':').map((val) => +val)
  let [finishH, finishM] = finishTime.split(':').map((val) => +val)
  if (+startH > +finishH) {
    finishH = finishH + 24
  }
  if (startM > finishM) {
    finishM = finishM + 60
    if (finishH === startH) {
      finishH = finishH + 23
    } else {
      finishH -= 1
    }
  }

  const h = finishH - startH
  return Math.max(count(startM, finishM) + 4 * h, 0)

  function count(start, finish) {
    let cnt = 0
    if (start === 0) {
      cnt = Math.floor(finish / 15)
    } else if (start <= 15) {
      cnt = Math.floor((finish - 15) / 15)
    } else if (start <= 30) {
      cnt = Math.floor((finish - 30) / 15)
    } else if (start <= 45) {
      cnt = Math.floor((finish - 45) / 15)
    } else if (start <= 60) {
      cnt = Math.floor((finish - 60) / 15)
    }
    return cnt
  }
}
