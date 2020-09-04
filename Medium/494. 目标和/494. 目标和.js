/**
 * @param {number[]} nums
 * @param {number} S
 * @return {number}
 */
const findTargetSumWays = function(nums, S) {
    const helper = (index, sum) => {
        if (index === nums.length) {
            return sum === S ? 1 : 0
        }
        return helper(index + 1, sum + nums[index]) + helper(index + 1, sum - nums[index])
    }
    return helper(0, 0)
}
