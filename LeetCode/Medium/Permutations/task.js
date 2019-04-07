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
var permute = function(nums) {
    
};

输入 [1]，输出 [1]
输入 [1, 2], 输出 [1, 2] [2, 1]
对于输入 [1, 2, 3]，
输出 
	[1, 2, 3]
	[1, 3, 2]
	[2, 1, 3]
	[2, 3, 1]
	[3, 1, 2]
	[3, 2, 1]

对于输入 [1, 2, 3, 4]
输出
	[1, 2, 3, 4] [2, 3, 4] [3, 4] [4, 3] [2, 3, 4] [,2, 4, 3] [3, 4, 2] [4, 3, 2]
	[1, 2, 4, 3]
	[1, 3, 4, 2]
	[1, 4, 3, 2]
	

将它分解为 []