/**
 * Initialize your data structure here.
 @param width - screen width
 @param height - screen height
 @param food - A list of food positions
 E.g food = [[1,1], [1,0]] means the first food is positioned at [1,1], the second is at [1,0].
 * @param {number} width
 * @param {number} height
 * @param {number[][]} food
 */
const SnakeGame = function(width, height, food) {
  this.width = width
  this.height = height
  this.food = food
  this.foodId = 0
  this.score = 0
  this.snack = []
  this.snack.push(0)
};

/**
 * Moves the snake.
 @param direction - 'U' = Up, 'L' = Left, 'R' = Right, 'D' = Down
 @return The game's score after the move. Return -1 if game over.
 Game over when snake crosses the screen boundary or bites its body.
 * @param {string} direction
 * @return {number}
 */
SnakeGame.prototype.move = function(direction) {
  const head = this.snack[this.snack.length - 1]
  let r = Math.trunc(head / this.width)
  let c = head % this.width
  if (direction === 'U') {
    r--
  } else if (direction === 'L') {
    c--
  } else if (direction === 'R') {
    c++
  } else {
    r++
  }

  if (r < 0 || r >= this.height || c < 0 || c >= this.width) return -1

  if (this.foodId < this.food.length && r === this.food[this.foodId][0] && c === this.food[this.foodId][1]) {
    this.snack.push(r * this.width + c)
    this.foodId++
    return ++this.score
  }

  this.snack.shift()

  if (this.snack.includes(r * this.width + c)) return -1
  else {
    this.snack.push(r * this.width + c)
    return this.score
  }
};

/**
 * Your SnakeGame object will be instantiated and called as such:
 * var obj = new SnakeGame(width, height, food)
 * var param_1 = obj.move(direction)
 */