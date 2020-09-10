/**
 * @param {number} n
 * @param {number} start
 * @return {number}
 */
const xorOperation = function(n, start) {
    let res = 0
    for (let i = 0; i < n; i++) {
        res ^= start + 2 * i
    }
    return res
}
