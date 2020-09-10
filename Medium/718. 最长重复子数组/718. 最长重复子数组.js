/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 */
var findLength = function(a, b) {
    let n = a.length
    let m = b.length
    // 初始化
    let dp = new Array(n + 1).fill(0).map(() => new Array(m + 1).fill(0))
    let res = 0
    // find solution
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= m; j++) {
            if (a[i - 1] === b[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1
            }
            res = Math.max(res, dp[i][j])
        }
    }
    return res
};