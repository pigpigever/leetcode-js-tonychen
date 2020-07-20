/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
const add = function(a, b) {
    return b === 0 ? a : add(a ^ b, (a & b) << 1)
}
