/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function(num) {
    let tmp = num, i = 0
    while (tmp) {
        num ^= 1 << i
        tmp >>= 1
        i++
    }
    return num
};