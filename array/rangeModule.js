var RangeModule = function () {
  this.interval = [];
};

/**
 * @param {number} left
 * @param {number} right
 * @return {void}
 */
RangeModule.prototype.addRange = function (left, right) {
  if (this.interval.length === 0) {
    this.interval.push([left, right]);
  } else {
    this.interval.push([left, right]);
    this.interval.sort((a, b) => a[0] - b[0]);
    let i = 0,
      n = this.interval.length,
      res = [];
    while (i < n) {
      let l = this.interval[i][0],
        r = this.interval[i][1];
      while (i < n - 1 && this.interval[i + 1][0] <= r) {
        r = Math.max(this.interval[++i][1], r);
      }
      res.push([l, r]);
      i++;
    }
    this.interval = res;
  }
  console.log('add', this.interval);
  // let q = [];
  // for (let key in this.interval) {
  //   let val = this.interval[key];
  //   if ((left <= key && right >= key) || (left <= val && right >= val)) {
  //     q.push([key, val]);
  //   }
  // }
  // while (q.length) {
  //   let it = q.shift();
  //   if (it.key)
  // }
};

/**
 * @param {number} left
 * @param {number} right
 * @return {boolean}
 */
RangeModule.prototype.queryRange = function (left, right) {
  return this.interval.some(item => {
    return left >= item[0] && right <= item[1];
  });
};

/**
 * @param {number} left
 * @param {number} right
 * @return {void}
 */
// [ [1, 3], [5, 7], [8, 14] ], [6, 9]
// [1, 4] [3, 6] [1, 3]
RangeModule.prototype.removeRange = function (left, right) {
  if (this.interval.length === 0) {
    return;
  } else {

    let i = 0,
      n = this.interval.length,
      res = [];

    while (i < n) {
      let l = this.interval[i][0],
        r = this.interval[i][1];

      if (l <= left) {
        if (r >= left && r <= right) {
          res.push([l, left]);
        } else if (right < r) {
          res.push([l, left]);
          res.push([right, r]);
        } else {
          res.push([l, r]);
        }
      } else {
        if (right >= l && right <= r) {
          res.push([right, r]);
        } else if (r <= right) {

        } else {
          res.push([l, r]);
        }
      }
      i++;
    }
    this.interval = res;
  }
  console.log('remove', this.interval);
};

let obj = new RangeModule();
obj.addRange(10, 20);
obj.removeRange(14, 16);
obj.queryRange(10, 14);
obj.queryRange(13, 15);
obj.queryRange(16, 17);

/**
 * Your RangeModule object will be instantiated and called as such:
 * var obj = new RangeModule()
 * obj.addRange(left,right)
 * var param_2 = obj.queryRange(left,right)
 * obj.removeRange(left,right)
 */