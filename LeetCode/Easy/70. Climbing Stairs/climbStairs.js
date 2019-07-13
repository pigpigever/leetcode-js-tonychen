/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let first = 1, second = 1, tmp = 0

    for (let i = 2; i <= n; i++) {
        tmp = first
        first = first + second
        second = tmp
    }
    return first
};

console.log(climbStairs(3))