var Leaderboard = function () {
  this.rankMap = new Map()
}

/**
 * @param {number} playerId
 * @param {number} score
 * @return {void}
 */
Leaderboard.prototype.addScore = function (playerId, score) {
  if (!this.rankMap.has(playerId)) {
    this.rankMap.set(playerId, 0)
  }
  this.rankMap.set(playerId, this.rankMap.get(playerId) + score)
}

/**
 * @param {number} K
 * @return {number}
 */
Leaderboard.prototype.top = function (K) {
  const scores = [...this.rankMap.values()].sort((a, b) => b - a)
  return scores.slice(0, K).reduce((prev, cur) => prev + cur, 0)
}

/**
 * @param {number} playerId
 * @return {void}
 */
Leaderboard.prototype.reset = function (playerId) {
  this.rankMap.delete(playerId)
}

/**
 * Your Leaderboard object will be instantiated and called as such:
 * var obj = new Leaderboard()
 * obj.addScore(playerId,score)
 * var param_2 = obj.top(K)
 * obj.reset(playerId)
 */
