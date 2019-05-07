/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    let len = s.length, i = 0, j, result = [], isOrder = true, str = '';

    if (len < 2 || len < numRows || numRows === 1) {
        return s;
    }

    for (j = 0; j < numRows; j += 1) {
        result[j] = '';
    }

    while (i < len) {
        if (isOrder) {
            for (j = 0; j < numRows; j += 1) {
                if (s[i]) {
                    result[j] += s[i++];

                    if (j === numRows - 1 && numRows !== 2) {
                        isOrder = false;
                    }
                } 
            }
        } else {
            for (j = numRows - 2; j > 0; j--) {
                if (s[i]) {
                    result[j] += s[i++]
                
                    if (j === 1) {
                        isOrder = true;
                    }
                } 
            }
        }
    }

    for (i = 0; i < numRows; i++) {
        str += result[i];
    }

    return str;
};
