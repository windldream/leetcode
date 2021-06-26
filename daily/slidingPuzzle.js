/**
 * @param {number[][]} board
 * @return {number}
 */
var slidingPuzzle = function (board) {
  const path = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0]
  ]
  const queue = [board]
  const visited = new Set()
  visited.add(board.toString)
  let ans = 0
  while (queue.length) {
    const len = queue.length
    for (let i = 0; i < len; i++) {
      const arr = queue.shift()
      if (isEqual(arr)) return ans
      outer: for (let j = 0; j < 2; j++) {
        for (let k = 0; k < 3; k++) {
          if (arr[j][k] === 0) {
            for (const [dx, dy] of path) {
              const x = j + dx
              const y = k + dy
              if (x >= 0 && x < 2 && y >= 0 && y < 3) {
                const tmep = arr[x][y]
                arr[j][k] = tmep
                arr[x][y] = 0
                if (!visited.has(arr.toString())) {
                  queue.push(copy(arr))
                  visited.add(arr.toString())
                }
                arr[x][y] = tmep
                arr[j][k] = 0
              }
            }
            break outer
          }
        }
      }
    }
    ans++
  }
  return -1

  function copy(board) {
    return board.map((item) => item.slice())
  }

  function isEqual(board) {
    const target = [
      [1, 2, 3],
      [4, 5, 0]
    ]
    for (let i = 0; i < 2; i++) {
      for (let j = 0; j < 3; j++) {
        if (board[i][j] !== target[i][j]) return false
      }
    }
    return true
  }
}
