function add (nums, target) {
	const arr = []
	function dfs (index, iterator) {
		if (index === nums.length) {
			return iterator === target
		}
		if (dfs(index + 1, iterator)) {
			return true
		}
		if (dfs(index + 1,iterator + nums[index])) {
			return true
		}
		return false
	}
	console.log(!!dfs(0, 0))
}

add([1, 2, 4, 7], 8)
