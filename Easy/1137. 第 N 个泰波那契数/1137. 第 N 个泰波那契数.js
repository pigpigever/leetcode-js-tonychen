/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function(n) {
    let ans = [0,1,1]
    for (let i = 3; i <= n; i++) {
        ans[i] = ans[i - 1] + ans[i - 2] + ans[i - 3]
    }
    return ans[n]
};