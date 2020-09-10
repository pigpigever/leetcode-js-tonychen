/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let N = nums.length
    let i = 0
    let j = 0
    while (i < N) {
        if (nums[i] === val) {
            nums[j++] = nums[i]
        }
        i++
    }
    return j
};

// removeElement([3,2,2,3], 3)
removeElement([0,1,2,2,3,0,4,2],  2)