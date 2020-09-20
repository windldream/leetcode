/**
 * @param {number} N
 */
var ExamRoom = function (N) {
  this.len = N
  this.students = []
}

/**
 * @return {number}
 */
ExamRoom.prototype.seat = function () {
  let student = 0
  if (this.students.length) {
    let dist = this.students[0]
    let prev = null
    for (const s of this.students) {
      if (prev !== null) {
        const d = (s - prev) >> 1
        if (d > dist) {
          dist = d
          student = prev + d
        }
      }
      prev = s
    }
    if (this.len - 1 - this.students[this.students.length - 1] > dist) {
      student = this.len - 1
    }
  }
  insert(this.students, student)
  return student

  function insert(arr, num) {
    if (arr.length === 0 || arr[arr.length - 1] <= num) {
      arr.push(num)
      return
    }

    if (arr[0] >= num) {
      arr.unshift(num)
      return
    }

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > num) {
        arr.splice(i, 0, num)
        break
      }
    }
  }
}

/**
 * @param {number} p
 * @return {void}
 */
ExamRoom.prototype.leave = function (p) {
  const index = this.students.indexOf(p)
  this.students.splice(index, 1)
}

/**
 * Your ExamRoom object will be instantiated and called as such:
 * var obj = new ExamRoom(N)
 * var param_1 = obj.seat()
 * obj.leave(p)
 */
