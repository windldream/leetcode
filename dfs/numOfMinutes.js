/**
 * @param {number} n
 * @param {number} headID
 * @param {number[]} manager
 * @param {number[]} informTime
 * @return {number}
 */
var numOfMinutes = function(n, headID, manager, informTime) {
  let res = 0;
  for (let i = 0; i < manager.length; i++) {
    if (informTime[i] === 0) {
      let temp = 0;
      let index = i;
      while (index !== -1) {
        temp += informTime[index];
        index = manager[index];
      }
      res = Math.max(res, temp);
    }
  }
  return res;
};
