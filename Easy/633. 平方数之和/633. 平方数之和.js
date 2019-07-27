/**
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum = function(c) {
    let i = 0, j = Math.floor(Math.sqrt(c))
    while (i <= j) {
        let ans = i * i + j * j
        if (ans === c) {
            return true
        }
        if (ans < c) {
            i++
        } else {
            j--
        }
    }
    return false
};
