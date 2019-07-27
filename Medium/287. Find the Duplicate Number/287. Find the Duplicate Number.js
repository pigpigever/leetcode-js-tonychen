/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    let i = 0, j = nums.length - 1
    nums.sort((a, b) => a - b)
    while (i < j) {
        if (nums[i] === nums[j]) {
            return nums[i]
        } else {
            i++
        }
    }
};