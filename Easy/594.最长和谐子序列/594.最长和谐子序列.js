/*
 * @lc app=leetcode.cn id=594 lang=javascript
 *
 * [594] 最长和谐子序列
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function(nums) {
    let map = {}, ans = 0
    for (let i = 0; i < nums.length; i++) {
        const val = map[nums[i]]
        map[nums[i]] = val ? val + 1 : 1
    }
    Object.keys(map).forEach((key) => {
        if (map[key - 0 + 1]) {
            ans = Math.max(ans, map[key] + map[key - 0 + 1])
        }
    })
    return ans
};

