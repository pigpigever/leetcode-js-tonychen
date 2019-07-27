/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
    let ans = 0, nums = new Array(n).fill(true)
    for (let i = 2; i * i <= n; i++) {
        if (nums[i]) {
            let k = 2
            while (i * k <= n) {
                nums[i * k] = false
                k++
            }
        }
    }
    for (let i = 2; i < n; i++) {
        if (nums[i]) {
            ans++
        }
    }
    return ans
};