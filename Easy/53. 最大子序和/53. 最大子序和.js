/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let ans = nums[0], max = nums[0]
    for (let i = 1; i < nums.length; i++) {
        ans = Math.max(nums[i] + ans, nums[i])
        nums[i] = ans
        max = Math.max(ans, max)
    }
    return max
};