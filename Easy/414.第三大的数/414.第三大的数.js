/*
 * @lc app=leetcode.cn id=414 lang=javascript
 *
 * [414] 第三大的数
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    nums = [...new Set(nums)].sort((a, b) => a - b)
    let len = nums.length
    return len > 2 ? nums[len - 3] : nums[len - 1]
};

