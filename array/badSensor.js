/**
 * @param {number[]} sensor1
 * @param {number[]} sensor2
 * @return {number}
 */
var badSensor = function (sensor1, sensor2) {
  const n = sensor1.length
  for (let i = 0; i < n; i++) {
    if (sensor1[i] !== sensor2[i]) {
      if (i === n - 1) return -1
      // 第一个不真确
      let j = i
      let k = i + 1
      while (sensor1[j] === sensor2[k]) {
        j++
        k++
      }
      if (j === n - 1) return 1

      // 第二个不正确
      j = i + 1
      k = i
      while (sensor1[j] === sensor2[k]) {
        j++
        k++
      }
      if (k === n - 1) return 2
      break
    }
  }
  return -1
}
