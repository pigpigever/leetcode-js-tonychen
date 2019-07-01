/*
 * @lc app=leetcode id=39 lang=javascript
 *
 * [39] Combination Sum
 */
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
	let total = []
	function dfs (index, sum, result) {
		if (sum === target) {
			total.push([...result])
		}
		if (sum > target) {
			return
		}
		for (let i = index; i < candidates.length; i++) {
			result.push(candidates[i])
			dfs(i, sum + candidates[i], result)
			result.pop()
		}
	}
	dfs(0, 0, [])
	return total
};

console.log(combinationSum([2, 3, 5], 8))
