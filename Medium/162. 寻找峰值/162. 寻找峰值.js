/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    const helper = (lo, hi) => {
        if (lo > hi) {
            return 0
        }
        let mid = Math.floor((lo + hi) / 2)
        let left = mid - 1 >= lo ? mid - 1 : Number.MIN_SAFE_INTEGER
        let right = mid + 1 < hi ? mid + 1 : Number.MAX_SAFE_INTEGER
        if (mid > left && mid > right) {
            return nums[mid]
        }
        return helper(lo, mid - 1) || helper(mid + 1, hi)
    }
    return helper(0, nums.length - 1)
};