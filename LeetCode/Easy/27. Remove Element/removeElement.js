/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let i = nums.length
    
    while (i--) {
        if (nums[i] === val) {
            nums.splice(i, 1)
        }
    }
};