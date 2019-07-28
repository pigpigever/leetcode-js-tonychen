/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) { 
    let i = 1, j = Math.floor(num >> 1) + 1
    while (i < j) {
        let mid = Math.floor((i + j) >> 1), ans = mid * mid
        if (ans === num) {
            return true
        }
        if (ans < num) {
            i = mid + 1
        } else {
            j = mid
        }
    }
    return num === 1
};