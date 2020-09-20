/**
 * @param {number} radius
 * @param {number} x_center
 * @param {number} y_center
 */
var Solution = function (radius, x_center, y_center) {
  this.rad = radius
  this.xc = x_center
  this.yc = y_center
}

/**
 * @return {number[]}
 */
Solution.prototype.randPoint = function () {
  // 最左和最下的坐标
  const x0 = this.xc - this.rad
  const y0 = this.yc - this.rad

  while (true) {
    const xg = x0 + Math.random() * this.rad * 2
    const yg = y0 + Math.random() * this.rad * 2
    if (Math.sqrt(Math.pow(xg - this.xc, 2) + Math.pow(yg - this.yc, 2)) <= this.rad) {
      return [xg, yg]
    }
  }
}

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(radius, x_center, y_center)
 * var param_1 = obj.randPoint()
 */
