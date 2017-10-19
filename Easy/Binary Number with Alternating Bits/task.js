/**
 * @param {number} n
 * @return {boolean}
 */
var hasAlternatingBits = function (n) {
    var tag = n % 2
    n = Math.floor(n / 2)
    while (n !== 0) {
        if (n % 2 === tag) {
            return false
        }
        tag = n % 2
        n = Math.floor(n / 2)
    }
    return true
}