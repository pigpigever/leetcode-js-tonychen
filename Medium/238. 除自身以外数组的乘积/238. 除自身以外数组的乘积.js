/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    const len = nums.length, ans = new Array(len).fill(1)
    let left = 1, right = 1
    for (let i = 0; i < len; i++) {
        ans[i] *= left
        left *= nums[i]
        ans[len - i - 1] *= right
        right *= nums[len - i - 1]
    }
    return ans
};