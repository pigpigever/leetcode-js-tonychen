/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
const isMatch = function(s, p) {
    const helper = (i, j) => {
        if (i < 0 && j < 0) {
            return true
        }
        if (i < 0 || j < 0) {
            return false
        }
        if (p[j] === '.') {
            return helper(i - 1, j - 1)
        }
        if (p[j] === '*') {
            return helper(i - 1, j)
        }
        if (s[i] !== p[j]) {
            return false
        }
        return helper(i - 1, j - 1)
    }
    return helper(s.length - 1, p.length - 1)
}
