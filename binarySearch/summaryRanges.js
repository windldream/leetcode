/**
 * Initialize your data structure here.
 */
var SummaryRanges = function () {
  this.intervals = [];
};

/** 
 * @param {number} val
 * @return {void}
 */
SummaryRanges.prototype.addNum = function (val) {
  if (this.intervals.length === 0) {
    this.intervals.push([val, val]);
  } else {
    for (let i = 0; i < this.intervals.length; i++) {
      if (this.intervals[i][0] <= val && this.intervals[i][1] >= val) {
        return;
      }
    }
    this.intervals.push([val, val]);
  }

  if (this.intervals.length > 1) {
    this.intervals.sort((a, b) => a[0] - b[0]);

    for (let i = 0; i < this.intervals.length; i++) {
      let l = this.intervals[i][0],
        r = this.intervals[i][1],
        l1 = this.intervals[i + 1] && this.intervals[i + 1][0],
        r1 = this.intervals[i + 1] && this.intervals[i + 1][1];

      if ((l1 && r + 1 === l1) || (l1 && r === l1)) {
        this.intervals[i][1] = r1;
        this.intervals.splice(i + 1, 1);
        i--;
      }
    }
  }

};

/**
 * @return {number[][]}
 */
SummaryRanges.prototype.getIntervals = function () {
  console.log(this.intervals);
  return this.intervals;
};

let obj = new SummaryRanges();
obj.addNum(6);
obj.addNum(0);
obj.addNum(4);
obj.addNum(8);
obj.addNum(7);
obj.addNum(6);
obj.addNum(4);
obj.addNum(7);
obj.addNum(5);
obj.getIntervals();

/** 
 * Your SummaryRanges object will be instantiated and called as such:
 * var obj = new SummaryRanges()
 * obj.addNum(val)
 * var param_2 = obj.getIntervals()
 */