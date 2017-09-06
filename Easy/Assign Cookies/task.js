/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function (g, s) {
    let sum = 0
    g.sort((a, b) => (a - b))
    s.sort((a, b) => (a - b))
    for (let i = 0; i < g.length; i++) {
        for (let j = 0; j < s.length; j++) {
            if (s[j] >= g[i]) {
                s.splice(j, 1)
                sum++
                break
            }
        }
        if (s.length === 0) {
            return sum
        }
    }
    return sum
};