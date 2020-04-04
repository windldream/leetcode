/**
 * initialize your data structure here.
 */
var MedianFinder = function () {
  this.list = [];
};

/**
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function (num) {
  let index = this.list.findIndex((val) => {
    if (val > num) {
      return true;
    }
  });
  if (index === -1) {
    this.list.push(num);
  } else {
    this.list.splice(index, 0, num);
  }
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function () {
  const len = this.list.length;
  if (len % 2) {
    return this.list[(len - 1) / 2];
  }
  return (this.list[len / 2 - 1] + this.list[len / 2]) / 2;
};

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */
