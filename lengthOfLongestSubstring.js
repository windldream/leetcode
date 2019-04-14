/**
 * @param {string} s
 * @return {number}
 */
// var lengthOfLongestSubstring = function(s) {
//     let len = s.length, i, max = 0, j;

//     if (len === 0 || len === 1) {
//         return len;
//     }

//     for (i = 0; i < len; i += 1) {
//         for (j = i + 1; j <= len; j += 1) {
//             if (isUnique(s.slice(i, j))) {
//                 max = Math.max(max, j - i);
//             }
//         }
//     }

//     return max;

//     function isUnique(str) {
//         let len = str.length, i = 0, map = {};
        
//         for (; i < len; i += 1) {
//             if (!map[str[i]]) {
//                 map[str[i]] = 1;
//             } else {
//                 return false;
//             }
//         }

//         return true;
//     }
// };

var lengthOfLongestSubstring = function(s) {
    let len = s.length, i = 0, max = 0, j = 0, set = new Set();

    while (i < len && j < len) {
        if (!set.has(s[j])) {
            set.add(s[j++]);
            max = Math.max(max, j - i);
        } else {
            set.clear();
            i++;
            j = i;
        }
    }

    return max;
};