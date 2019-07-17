// Given an array nums of n integers and an integer target, are there elements a, b, c,
// and d in nums such that a + b + c + d = target? Find all unique quadruplets in the
// array which gives the sum of target.
// 	Note:
//
// The solution set must not contain duplicate quadruplets.
//
// 	Example:
//
// Given array nums = [1, 0, -1, 0, -2, 2], and target = 0.
//
// A solution set is:
// 	[
// 		[-1,  0, 0, 1],
// 		[-2, -1, 1, 2],
// 		[-2,  0, 0, 2]
// 	]
// [ 1, 0, -1, 0, -2, 2 ]
// [ -2, -1, 0, 0, 1, 2 ]

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {

	for (let i = 0, len = nums.length; i < len; i++) {
		const target = nums[i]
		let j = 0, k = target.length - 1

		while (j <= k) {
			if (j === k) {

			} else {

			}
			j++
			k--
		}
	}

};
