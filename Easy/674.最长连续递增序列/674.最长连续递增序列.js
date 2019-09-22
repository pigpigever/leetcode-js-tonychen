/*
 * @lc app=leetcode.cn id=674 lang=javascript
 *
 * [674] 最长连续递增序列
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function(nums) {
    if (!nums.length) {
        return 0
    }
    let tmp = 1, sum = 1
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > nums[i - 1]) {
            tmp++
        } else {
            sum = Math.max(sum, tmp)
            tmp = 1
        }
    }
    return Math.max(sum, tmp)
};

