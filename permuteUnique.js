/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    let len = nums.length, res = [], first = 0;
    
    // fist表示已访问过的元素
    function backtrack(first) {
        if (first === len) {
            res.push(nums.slice(0));
        }
        // i表示当前已被访问过的元素
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

console.log(permuteUnique([2, 1, 1]))