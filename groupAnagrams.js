/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let len = strs.length, res = [], map = {}, i, j = 0;

    for (i = 0; i < len; i++) {
        let str = strs[i].split('').sort().join('');
        if (map[str] == undefined) {
            map[str] = j;
            res[j] = [];
            res[j].push(strs[i]);
            j++
        } else {
            res[map[str]].push(strs[i]);
        }
    }

    return res;
};

// var groupAnagrams = function(strs) {
//     let len = strs.length, res = [], map = {}, i;

//     for (i = 0; i < len; i++) {
//         let str = strs[i].split('').sort().join('');
//         if (!map[str]) {
//             map[str] = [];
//             map[str].push(strs[i]);
//         } else {
//             map[str].push(strs[i]);
//         }
//     }

//     for (i in map) {
//         res.push(map[i])
//     }

//     return res;
// };

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]))