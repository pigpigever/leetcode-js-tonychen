// Given an array nums of n integers, are there elements a, b, c
// in nums such that a + b + c = 0? Find all unique triplets in 
// the array which gives the sum of zero.

// Note:

// The solution set must not contain duplicate triplets.

// Example:

// Given array nums = [-1, 0, 1, 2, -1, -4],

// A solution set is:
// [
//   [-1, 0, 1],
//   [-1, -1, 2]
// ]

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
	let result = []
	nums.sort((a, b) => a -b)
	for (let i = 0; i < nums.length; i++) {
		if (i === 0 || (i > 0 && nums[i] !== nums[i - 1])) {
			let j = i + 1, k = nums.length - 1, target = nums[i]
			while (j < k) {
				if (target + nums[j] + nums[k] === 0) {
					result.push([target, nums[j], nums[k]])
					while(j < k && nums[j] === nums[j + 1])
						j++
					while(j < k && nums[k] === nums[k - 1])
						k--
					j++, k--
				} else if (target + nums[j] + nums[k] < 0) {
					j++
				} else {
					k--
				}
			}
		}
	}
	return result
};

threeSum([-2,0,1,1,2])
