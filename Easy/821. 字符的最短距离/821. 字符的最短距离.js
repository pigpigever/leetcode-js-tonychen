/**
 * @param {string} S
 * @param {character} C
 * @return {number[]}
 */
var shortestToChar = function(S, C) {
    let ans = [], len = S.length, hash = []
    for (let i = 0; i < len; i++) {
        if (S.charAt(i) === C) {
            hash.push(i)
        }
    }
    for (let i = 0; i < len; i++) {
        if (S.charAt(i) === C) {
            ans[i] = 0
        } else {
            let min = Number.MAX_SAFE_INTEGER
            for (let j = 0; j < hash.length; j++) {
                let res = Math.abs(i - hash[j])
                min = Math.min(min, res)
            }
            ans[i] = min
        }
    }
    return ans
};