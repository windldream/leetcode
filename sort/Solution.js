/**
 * @param {number} N
 * @param {number[]} blacklist
 */
var Solution = function(N, blacklist) {
  this.map = new Map();
  const len = blacklist.length;
  this.nowLen = N - len;
  let startNum = this.nowLen;
  for (let i = 0; i < len; i++) {
    if (blacklist[i] < this.nowLen) {
      while (blacklist.includes(startNum)) {
        startNum++;
      }
      this.map[blacklist[i]] = startNum++;
    }
  }
};

/**
 * @return {number}
 */
Solution.prototype.pick = function() {
  const randomIndex = Math.floor(Math.random() * this.nowLen);
  if (this.map[randomIndex]) {
    return this.map[randomIndex];
  }
  return randomIndex;
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(N, blacklist)
 * var param_1 = obj.pick()
 */
