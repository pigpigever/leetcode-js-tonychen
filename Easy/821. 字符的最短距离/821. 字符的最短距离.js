/**
 * @param {string} S
 * @param {character} C
 * @return {number[]}
 */
var shortestToChar = function(S, C) {
    let ans = [], hash = []
    for (let i = 0; i < S.length; i++) {
        if (S.charAt(i) === C) {
            hash.push(i)
        }
    }
    for (let i = 0; i < S.length; i++) {
        if (S.charAt(i) === C) {
            ans[i] = 0
        } else {
            let min = Number.MAX_SAFE_INTEGER
            for (let j = 0; j < hash.length; j++) {
                min = Math.min(min, Math.abs(i - hash[j]))
            }
            ans[i] = min
        }
    }
    return ans
};