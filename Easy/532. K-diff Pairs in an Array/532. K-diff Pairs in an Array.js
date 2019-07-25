/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findPairs = function(nums, k) {
    let i = 0, j = nums.length - 1, ans = 0
    nums.sort((a, b) => a - b)
    while (j > 0) {
        if (i === j && j === 1) {
            return ans
        }
        if (i === j) {
            i = 0
            j--
        }
        let res = Math.abs(nums[i] - nums[j])
        if (res <= k) {
            ans = res === k ? ans + 1 : ans
            i = 0
            j--
        } else {
            i++
        }
        while (i < j && nums[i] === nums[i - 1]) i++
        while (i < j && nums[j] === nums[j + 1]) j--
    }
    return ans
};