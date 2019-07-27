/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    let i = j = 0, max = Number.MIN_SAFE_INTEGER, sum = 0
    for (let i = 0; j + k <= nums.length; i++) {
        if (i < k) {
            sum += nums[i]
        } else {
            max = Math.max(max, sum)
            sum = sum - nums[j] + nums[j + k]
            j++
        }
    }
    return max / k
};