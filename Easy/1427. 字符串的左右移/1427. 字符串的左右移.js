/**
 * @param {string} s
 * @param {number[][]} shift
 * @return {string}
 */
const stringShift = function(s, shift) {
    let res = 0
    for (const [direction, amount] of shift) {
        if (direction === 0) {
            res -= amount
        } else {
            res += amount
        }
    }
    res %= s.length
    if (res === 0) {
        return s
    }
    if (res > 0) {
        return s.substring(-res) + s.substring(0, s.length - res)
    }
    return s.substring(-res) + s.substring(0, -res)
}
