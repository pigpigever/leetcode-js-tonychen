// Given a collection of distinct integers, return all possible permutations.

// Example:

// Input: [1,2,3]
// Output:
// [
//   [1,2,3],
//   [1,3,2],
//   [2,1,3],
//   [2,3,1],
//   [3,1,2],
//   [3,2,1]
// ]
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
let result = []
let temp = []

function swap (nums, i, j) {
	let tmp = nums[i]
	nums[i] = nums[j]
	nums[j] = tmp
}

var permute = function(nums, index) {
	if (index === nums.length) {
		console.log(nums)
	}
	for (let i = index; i < nums.length; i++) {
		swap(nums, index, i)
		permute(nums.slice(), index + 1)
		swap(nums, index, i)
	}
};

permute([1, 2, 3, 4], 0)

console.log('result --->', result)
