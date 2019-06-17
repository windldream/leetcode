/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    let len = nums.length, res = [], first = 0, visited = [];
    nums.sort((a, b) => a - b);

    // first表示已访问过的元素
    function backtrack(first, visited) {
        if (first === len) {
            res.push(nums.slice(0));
            return;
        }
        // i表示当前已被访问过的元素
        // 深度优先搜索
        for (let i = 0; i < len; i++) {
            if (visited[i] || (i > 0 && nums[i] === nums[i - 1] && !visited[i - 1])) {
                continue
            }
            visited[i] = true;
            [nums[first], nums[i]] = [nums[i], nums[first]];
            backtrack(first + 1, visited);
            [nums[first], nums[i]] = [nums[i], nums[first]];
            visited[i] = false;
        }
    }


    backtrack(0, visited);

    return res;
};

// var permuteUnique = function(nums) {
//     let len = nums.length, res = [], first = 0, visited = [];
//     nums.sort((a, b) => a - b);

//     // first表示已访问过的元素
//     function backtrack(first, visited, tmp) {
//         if (first === len) {
//             res.push(tmp.slice(0));
//             return;
//         }
//         // i表示当前已被访问过的元素
//         // 深度优先搜索
//         for (let i = 0; i < len; i++) {
//             if (visited[i] || (i > 0 && nums[i] === nums[i - 1] && !visited[i - 1])) {
//                 continue
//             }
//             visited[i] = true;
//             tmp.push(nums[i])
//             backtrack(first + 1, visited, tmp);
//             tmp.pop()
//             visited[i] = false;
//         }
//     }


//     backtrack(0, visited, []);

//     return res;
// };

// 0: (3) [1, 1, 2]
// 1: (3) [1, 2, 1]
// 2: (3) [1, 1, 2]
// 3: (3) [1, 2, 1]
// 4: (3) [2, 1, 1]
// 5: (3) [2, 1, 1]

console.log(permuteUnique([2, 1, 1]))