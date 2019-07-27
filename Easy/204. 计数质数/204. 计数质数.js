/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
    let ans = 0
    for (let i = 2; i < n; i++) {
        if (isPrime(i)) {
            ans++
        }
    }
    return ans
    function isPrime (num) {
        for (let i = 2; i * i <= num; i++) {
            if (num % i === 0) {
                return false
            }
        }
        return true
    }
};