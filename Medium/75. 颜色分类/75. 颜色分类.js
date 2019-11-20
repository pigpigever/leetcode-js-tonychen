/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let start = 0, end = nums.length - 1, i = 0

    while (i <= end) {
        if (nums[i] === 0) {
            swap(i++, start++)
        } else if (nums[i] === 2) {
            swap(i, end--)
        } else {
            i++
        }
    }

    function swap (i, j) {
        let tmp = nums[i]
        nums[i] = nums[j]
        nums[j] = tmp
    }
};

sortColors([1,2,0])