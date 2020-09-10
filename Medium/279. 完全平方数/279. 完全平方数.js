/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
    let curr = 1, dp = [0]
    const { floor, sqrt } = Math
    for (let i = 1; i <= n; i++) {
        curr = floor(sqrt(i))
        dp[i]
    }
};
// dp[1] = 1 + dp[0] = 1
// dp[2] = 1 + dp[1] = 2
// dp[3] = 1 + dp[2] = 3
// dp[4] = 1 + dp[0] = 1
// dp[5] = 1 + dp[1] = 2
// dp[