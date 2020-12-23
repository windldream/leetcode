class Formula {
  constructor(c, v) {
    this.val = v
    this.cells = c
  }
}
/**
 * @param {number} H
 * @param {character} W
 */
const Excel = function (H, W) {
  const col = W.charCodeAt() - 'A'.charCodeAt() + 1
  this.stack = []
  this.formulas = Array(H)
    .fill(0)
    .map(() =>
      Array(col)
        .fill(null)
    )
}

/**
 * @param {number} r
 * @param {character} c
 * @param {number} v
 * @return {void}
 */
Excel.prototype.set = function (r, c, v) {
  c = c.charCodeAt() - 'A'.charCodeAt()
  this.formulas[r - 1][c] = new Formula(new Map(), v)
  this.topologicalSort(r - 1, c)
  this.executeStack()
}

/**
 * @param {number} r
 * @param {character} c
 * @return {number}
 */
Excel.prototype.get = function (r, c) {
  c = c.charCodeAt() - 'A'.charCodeAt()
  if (this.formulas[r - 1][c] == null) return 0
  return this.formulas[r - 1][c].val
}

Excel.prototype.topologicalSort = function (r, c) {
  for (let i = 0; i < this.formulas.length; i++) {
    for (let j = 0; j < this.formulas[0].length; j++) {
      const formula = this.formulas[i][j]
      if (formula != null && formula.cells.has(String.fromCharCode('A'.charCodeAt() + c) + (r + 1))) {
        this.topologicalSort(i, j)
      }
    }
  }
  this.stack.push([r, c])
}

Excel.prototype.executeStack = function () {
  while (this.stack.length) {
    const [r, c] = this.stack.pop()
    if (this.formulas[r][c].cells.size > 0) {
      this.executeSum(r, c, this.formulas[r][c].cells)
    }
  }
}

Excel.prototype.executeSum = function (r, c, cells) {
  let sum = 0
  for (const [s, val] of cells) {
    const x = s.substring(1) - 1
    const y = s[0].charCodeAt() - 'A'.charCodeAt()
    sum += (this.formulas[x][y] != null ? this.formulas[x][y].val : 0) * val
  }
  this.formulas[r][c] = new Formula(cells, sum)
  return sum
}

/**
 * @param {number} r
 * @param {character} c
 * @param {string[]} strs
 * @return {number}
 */
Excel.prototype.sum = function (r, c, strs) {
  const cells = this.convert(strs)
  const sum = this.executeSum(r - 1, c.charCodeAt() - 'A'.charCodeAt(), cells)
  this.set(r, c, sum)
  this.formulas[r - 1][c.charCodeAt() - 'A'.charCodeAt()] = new Formula(cells, sum)
  return sum
}

Excel.prototype.convert = function (strs) {
  const res = new Map()
  for (const str of strs) {
    if (!str.includes(':')) {
      res.set(str, (res.get(str) || 0) + 1)
    } else {
      const cells = str.split(':')
      const startI = +cells[0].substring(1)
      const endI = +cells[1].substring(1)
      const startJ = cells[0][0].charCodeAt() - 'A'.charCodeAt()
      const endJ = cells[1][0].charCodeAt() - 'A'.charCodeAt()
      for (let i = startI; i <= endI; i++) {
        for (let j = startJ; j <= endJ; j++) {
          const col = String.fromCharCode(j + 'A'.charCodeAt())
          const key = col + i
          res.set(key, (res.get(key) || 0) + 1)
        }
      }
    }
  }
  return res
}

/**
 * Your Excel object will be instantiated and called as such:
 * var obj = new Excel(H, W)
 * obj.set(r,c,v)
 * var param_2 = obj.get(r,c)
 * var param_3 = obj.sum(r,c,strs)
 */
