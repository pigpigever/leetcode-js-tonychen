/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    let str = n.toString(2), count = 0
    for (let i = 0; i < str.length; i++) {
        if (str[i] === '1') {
            count++
        }
    }
    return count
};