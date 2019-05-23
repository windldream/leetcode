/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    candidates.sort((a, b) => a - b);
    let len = candidates.length, res = [];

    search(0, [], target);

    return res;

    function search(index, prefix, target) {  
        if (target === 0) {
            res.push(prefix.slice(0));
            return;
        }
        if (target < candidates[index] || index === len) {
            return;
        }

        prefix.push(candidates[index]);
        // 深度优先探索
        search(index, prefix, target - candidates[index]);
        prefix.pop();
        search(index + 1, prefix, target);
    }
};

console.log(combinationSum([2, 3, 6, 7], 7))