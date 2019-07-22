/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function(heights) {
    let tmp = heights.slice().sort((a, b) => a - b), count = 0
    for (let i = 0; i < tmp.length; i++) {
        if (tmp[i] !== heights[i]) {
            count++
        }
    }
    return count
};