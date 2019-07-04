function foo (nums, target) {

	let result = []
	function dfs (index, sum, tmp) {
		if (sum === target) {
			result.push(tmp.slice())
		}
		if (sum > target) {
			return
		}
		for (let i = index; i < nums.length; i++) {
			tmp.push(nums[i])
			dfs(i, sum + nums[i], tmp)
			tmp.pop()
		}
	}
	dfs(0, 0, [])
	console.log(result)
}

foo([2,3,6,7], 7)
