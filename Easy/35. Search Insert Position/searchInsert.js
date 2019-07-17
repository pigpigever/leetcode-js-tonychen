/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] >= target) {
            return i
        } else if (i + 1 < nums.length && nums[i] < target && target < nums[i + 1]) {
            return i + 1
        }
    }
    return nums.length
};

console.log(searchInsert([1,3], 2))