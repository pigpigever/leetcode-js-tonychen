/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (!strs || !strs.length) {
        return ''
    }
    let target = strs[0]
    for (let i = 0; i < target.length; i++) {
        for (let j = 1; j < strs.length; j++) {
            if (strs[j][i] !== target[i]) {
                return target.substring(0, i)
            }
        }
    }
    return target
};