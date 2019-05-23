/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    candidates.sort((a, b) => a - b);
    let len = candidates.length, res = [];

    search(0, [], target);

    return res;

    function search(index, prefix, target) {  
        if (target === 0) {
            let flag = res.every(item => {
                return item.toString() !== prefix.toString();
            })
            if (flag) {
                res.push(prefix.slice());
            }
            return;
        }

        if (target < candidates[index] || index === len) {
            return;
        }

        prefix.push(candidates[index]);
        search(index + 1, prefix, target - candidates[index]);
        prefix.pop();
        search(index + 1, prefix, target);
    }
};

console.log(combinationSum2([1, 1, 2, 2, 5, 6, 7, 10], 8))