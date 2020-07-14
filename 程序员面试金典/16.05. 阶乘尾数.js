/**
 * @param {number} n
 * @return {number}
 */
const trailingZeroes = function(n) {
    if (n < 5) {
        return 0
    }
    let res = 0
    while (n >= 5) {
        res += Math.floor(n / 5)
        n = Math.floor(n / 5)
    }
    return res
}
