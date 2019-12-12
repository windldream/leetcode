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
 * ["RangeModule","queryRange","queryRange","addRange","addRange","queryRange","queryRange","queryRange","removeRange","addRange","removeRange","addRange","removeRange","removeRange","queryRange","queryRange","queryRange","queryRange","removeRange","addRange","removeRange","queryRange","addRange","addRange","removeRange","queryRange","removeRange","removeRange","removeRange","addRange","removeRange","addRange","queryRange","queryRange","queryRange","queryRange","queryRange","addRange","removeRange","addRange","addRange","addRange","queryRange","removeRange","addRange","queryRange","addRange","queryRange","removeRange","removeRange","addRange","addRange","queryRange","queryRange","addRange","addRange","removeRange","removeRange","removeRange","queryRange","removeRange","removeRange","addRange","queryRange","removeRange","addRange","addRange","queryRange","removeRange","queryRange","addRange","addRange","addRange","addRange","addRange","removeRange","removeRange","addRange","queryRange","queryRange","removeRange","removeRange","removeRange","addRange","queryRange","removeRange","queryRange","addRange","removeRange","removeRange","queryRange"]
[[],[21,34],[27,87],[44,53],[69,89],[23,26],[80,84],[11,12],[86,91],[87,94],[34,52],[1,59],[62,96],[34,83],[11,59],[59,79],[1,13],[21,23],[9,61],[17,21],[4,8],[19,25],[71,98],[23,94],[58,95],[12,78],[46,47],[50,70],[84,91],[51,63],[26,64],[38,87],[41,84],[19,21],[18,56],[23,39],[29,95],[79,100],[76,82],[37,55],[30,97],[1,36],[18,96],[45,86],[74,92],[27,78],[31,35],[87,91],[37,84],[26,57],[65,87],[76,91],[37,77],[18,66],[22,97],[2,91],[82,98],[41,46],[6,78],[44,80],[90,94],[37,88],[75,90],[23,37],[18,80],[92,93],[3,80],[68,86],[68,92],[52,91],[43,53],[36,37],[60,74],[4,9],[44,80],[85,93],[56,83],[9,26],[59,64],[16,66],[29,36],[51,96],[56,80],[13,87],[42,72],[6,56],[24,53],[43,71],[36,83],[15,45],[10,48]]
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