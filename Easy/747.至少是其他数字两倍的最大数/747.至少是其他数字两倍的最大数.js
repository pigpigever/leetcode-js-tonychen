/*
 * @lc app=leetcode.cn id=747 lang=javascript
 *
 * [747] 至少是其他数字两倍的最大数
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function(nums) {
    let maxIndex = 0, small = Number.MIN_SAFE_INTEGER
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > nums[maxIndex]) {
            small = nums[maxIndex]
            maxIndex = i
        } else if (nums[i] > small) {
            small = nums[i]
        }
    }
    return nums[maxIndex] >= 2 * small ? maxIndex : -1
};

