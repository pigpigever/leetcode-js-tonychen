// Given two integers n and k, return all possible combinations of k numbers out of 1 ... n.
//
// 	Example:
//
// Input: n = 4, k = 2
// Output:
// 	[
// 		[2,4],
// 		[3,4],
// 		[2,3],
// 		[1,2],
// 		[1,3],
// 		[1,4],
// 	]
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
	let result = []
	function dfs (index, tmp, k) {
		if (k === 0) {
			result.push([...tmp])
			return
		}
		for (let i = index; i < n - k + 1; i++) {
			if (tmp[tmp.length - 1] >= i + 1) continue
			tmp.push(i + 1)
			dfs(index + 1, tmp, k - 1)
			tmp.pop()
		}
	}
	dfs(0, [], k)
	return result
};

combine(5, 2)
