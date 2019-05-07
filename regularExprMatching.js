/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */

// 投机取巧
// var isMatch = function(s, p) {
//     let reg = new RegExp(p);
//     let match = s.match(reg);

//     if (match && match[0] === s) {
//         return true;
//     } else {
//         return false
//     }
// };

// 递归
var isMatch = function(s, p) {
    let sLen = s.length, pLen = p.length, first_match;

    if (pLen === 0) {
        return sLen === 0;
    }

    first_match = sLen !== 0 && (s[0] === p[0] || p[0] === '.');

    if (pLen >= 2 && p[1] === '*') {
        return isMatch(s, p.slice(2)) || (first_match && isMatch(s.slice(1), p)); 
    } else {
        return first_match && isMatch(s.slice(1), p.slice(1));
    }
};

isMatch('aa', 'a*');