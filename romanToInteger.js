/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let map = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }, i, len = s.length, resultNum = 0;

    for (i = 0; i < len; i++) {
        resultNum += map[s[i]] < map[s[i + 1]] ? -map[s[i]] : map[s[i]]
    }

    return resultNum;
};

console.log(romanToInt('MCMXCIV'))