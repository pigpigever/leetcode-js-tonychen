/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
	let result = []

	candidates.sort((a, b) => a - b)
	dfs(0, 0, [])
	return result

	function dfs (index, sum, tmp) {
		if (sum === target) {
			result.push([...tmp])
		}
		if (sum > target) {
			return
		}
		for (let i = index; i < candidates.length; i++) {
			let target = candidates[i]
			if (i > index && target === candidates[i - 1]) continue
			tmp.push(target)
			dfs(i + 1, sum + target, tmp)
			tmp.pop()
		}
	}
};

console.log(combinationSum2([10,1,2,7,6,1,5], 8))
