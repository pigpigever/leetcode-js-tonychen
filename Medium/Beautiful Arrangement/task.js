// Suppose you have N integers from 1 to N. We define a beautiful arrangement as an array that is constructed by these N numbers successfully if one of the following is true for the ith position (1 <= i <= N) in this array:
//
// 	The number at the ith position is divisible by i.
// 	i is divisible by the number at the ith position.
//
//
// 	Now given N, how many beautiful arrangements can you construct?
//
// 	Example 1:
//
// Input: 2
// Output: 2
// Explanation:
//
// 	The first beautiful arrangement is [1, 2]:
//
// Number at the 1st position (i=1) is 1, and 1 is divisible by i (i=1).
//
// 	Number at the 2nd position (i=2) is 2, and 2 is divisible by i (i=2).
//
// 	The second beautiful arrangement is [2, 1]:
//
// Number at the 1st position (i=1) is 2, and 2 is divisible by i (i=1).
//
// 	Number at the 2nd position (i=2) is 1, and i (i=2) is divisible by 1.
/**
 * @param {number} N
 * @return {number}
 */
var countArrangement = function(N) {

	const nums = []
	let count = 0
	for(let i = 0; i < N; i++) {
		nums[i] = i + 1
	}
	function dfs (nums, index) {
		if (index === N) {
			count++
		}
		for (let i = index; i < N; i++) {
			swap(nums, i, index)
			if (nums[index] % (index + 1) === 0 || (index + 1) % nums[index] === 0) {
				dfs(nums.slice(), index + 1)
			}
			swap(nums, i, index)
		}
	}
	function swap (nums, i, j) {
		let tmp = nums[i]
		nums[i] = nums[j]
		nums[j] = tmp
	}

	dfs(nums, 0)
	return count
};

console.log(countArrangement(6))
