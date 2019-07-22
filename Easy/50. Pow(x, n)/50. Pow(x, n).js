/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    if (n === 0) return 1
    let mid = Math.abs(Math.floor(n >> 1))
    let sum = n % 2 === 0 ? 1 : x
    if (n > 0) {
        for (let i = 0; i < mid; i++) {
            sum *= x * x
        }
    } else {
        for (let i = 0; i < mid; i++) {
            sum *= (1 / x) * (1 / x)
        }
    }
    return sum
};

console.log(myPow(3.89707,2))