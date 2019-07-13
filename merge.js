/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    let len = intervals.length, i = 0;

    if (len === 0) {
        return [];
    }

    for (i = 0; i < len; i++) {
        intervals[i].sort((a, b) => a - b);
    }

    intervals.sort((a, b) => a[0] - b[0]);

    for (i = 0; i < intervals.length; i++) {
        let n = intervals[i].length;
        if (intervals[i + 1] && intervals[i][n - 1] >= intervals[i + 1][intervals[i + 1].length - 1]) {
            intervals[i] = [intervals[i][0], intervals[i][n - 1]]
            intervals.splice(i + 1, 1)
            i--;
        } else if (intervals[i + 1] && intervals[i][n - 1] >= intervals[i + 1][0]) {
            intervals[i] = [intervals[i][0], intervals[i + 1][intervals[i + 1].length - 1]]
            intervals.splice(i + 1, 1)
            i--;
        }
    }

    return intervals;
};

console.log(merge([[1,4],[2,3]]))