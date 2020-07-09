/**
 * @param {number} N
 * @return {number}
 */
var bitwiseComplement = function(N) {
    if (N === 0) {
        return 1
    }
    let cnt = 0
    let res = 0
    while (N) {
        const temp = N ^ 1
        if (temp % 2 === 1) {
            res += Math.pow(2, cnt)
        }
        cnt++
        N >>= 1
    }
    return res
};
