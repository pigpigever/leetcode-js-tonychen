/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
const minSubArrayLen = function(s, nums) {
    let prev = 0
    let curr = 0
    let sum = nums[0]
    let res = Infinity
    while (curr < nums.length) {
        while (curr < nums.length && sum < s) {
            sum += nums[++curr]
        }
        if (sum >= s) {
            res = Math.min(res, curr - prev + 1)
            sum -= nums[prev]
            prev++
        }
    }
    return res === Infinity ? 0 : res
}

// console.log(minSubArrayLen(7, [2,3,1,2,4,3]))
console.log(minSubArrayLen(11, [1,2,3,4,5]))
