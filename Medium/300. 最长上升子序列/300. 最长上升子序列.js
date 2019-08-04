/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    if (!nums) {
        return 0
    }
    let dp = [], max = 1
    for (let i = 0; i < nums.length; i++) {
        dp[i] = 1
        for (let j = 0; j < i; j++) {
            if (nums[i] < nums[j]) {
                dp[i] = Math.max(dp[j] + 1, 1)
            }
        }
        max = Math.max(max, dp[i])
    }
    return max
};
lengthOfLIS([10,9,2,5,3,7,101,18])
// lengthOfLIS([2,2,3,2,2])
// lengthOfLIS([4,10,4,3,8,9])