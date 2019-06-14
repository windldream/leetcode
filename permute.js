/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    let len = nums.length, res = [], first = 0;
    
    function backtrack(first) {
        if (first === len) {
            res.push(nums.slice(0));
        }
        // first表示当前已被访问过的元素
        // i表示下一个将要访问的元素
        // 深度优先搜索
        for (let i = first; i < len; i++) {
            [nums[first], nums[i]] = [nums[i], nums[first]];
            backtrack(first + 1);
            [nums[first], nums[i]] = [nums[i], nums[first]];
        }
    }

    backtrack(0);

    return res;
};

console.log(permute([1, 2, 3]))