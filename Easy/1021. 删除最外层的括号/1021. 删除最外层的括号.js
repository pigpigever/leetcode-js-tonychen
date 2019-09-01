/**
 * @param {string} S
 * @return {string}
 */
var removeOuterParentheses = function(S) {
    let count = 1, i = 1, len = S.length, res = ''
    while (i < len) {
        if (S.charAt(i) === '(') {
            count++
        } else {
            count--
        }
        if (count !== 0) {
            res += S.charAt(i)
            i++
        } else {
            count = 1
            i += 2
        }
    }
    return res
};