/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function(n) {
	let chess = [], count = 0, pos = []

	init()
	dfs(0)
	return count

	function dfs (index) {
		if (index === n) {
			count++
		}
		for (let j = 0; j < n; j++) {
			if (isOk(index, j)) {
				pos[index] = j
				dfs(index + 1)
				pos[index] = -1
			}
		}
	}
	function isOk (x, y) {
		for (let i = 0; i < x; i++) {
			if (y === pos[i] || (Math.abs(x - i) === Math.abs(y - pos[i]))) {
				return false
			}
		}
		return true
	}
	function init () {
		for (let i = 0; i < n; i++) {
			pos[i] = -1
		}
	}
};
