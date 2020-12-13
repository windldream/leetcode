/**
 * // This is the robot's control interface.
 * // You should not implement it, or speculate about its implementation
 * function Robot() {
 *     // Returns true if the cell in front is open and robot moves into the cell.
 *     // Returns false if the cell in front is blocked and robot stays in the current cell.
 *     @return {boolean}
 *     this.move = function() {
 *         ...
 *     };
 *
 *     // Robot will stay in the same cell after calling turnLeft/turnRight.
 *     // Each turn will be 90 degrees.
 *     @return {void}
 *     this.turnLeft = function() {
 *         ...
 *     };
 *
 *     // Robot will stay in the same cell after calling turnLeft/turnRight.
 *     // Each turn will be 90 degrees.
 *     @return {void}
 *     this.turnRight = function() {
 *         ...
 *     };
 *
 *     // Clean the current cell.
 *     @return {void}
 *     this.clean = function() {
 *         ...
 *     };
 * };
 */

/**
 * @param {Robot} robot
 * @return {void}
 */
var cleanRoom = function (robot) {
  const dirs = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1]
  ]
  const visited = new Set()
  backtrack()

  function backtrack(cell = [0, 0], d = 0) {
    visited.add(cell.join('&'))
    robot.clean()
    for (let i = 0; i < dirs.length; i++) {
      const index = (d + i) % 4
      const newCell = [cell[0] + dirs[index][0], cell[1] + dirs[index][1]]
      if (!visited.has(newCell.join('&')) && robot.move()) {
        backtrack(newCell, index)
        goback()
      }
      robot.turnRight()
    }
  }

  function goback() {
    robot.turnRight()
    robot.turnRight()
    robot.move()
    robot.turnRight()
    robot.turnRight()
  }
}
