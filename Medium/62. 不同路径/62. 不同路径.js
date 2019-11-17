/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    if (m < 1 || n < 1) {
        return 0
    }
    const ans = []
    for (let i = 0; i < n; i++) {
        ans[i] = []
        for (let j = 0; j < m; j++) {
            if (i === 0 || j === 0) {
                ans[i][j] = 1
            } else {
                ans[i][j] = ans[i - 1][j] + ans[i][j - 1]
            }
        }
    }
    return ans[n - 1][m - 1]
};

console.log(uniquePaths(7, 3))