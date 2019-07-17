/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
	let chess = [], result = [], pos = []

	init()
	dfs(0)
	return result

	function dfs (index) {
		if (index === n) {
			for (let i = 0; i < n; i++) {
				chess[i] = []
				for (let j = 0; j < n; j++) {
					chess[i][j] = '.'
 				}
			}
			for (let i = 0; i < n; i++) {
				chess[i][pos[i]] = 'Q'
			}
			result.push(chess.map((item) => item.join('')))
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

console.log(solveNQueens(4))
// 输入: 4
// 输出: [
// 	[".Q..",  // 解法 1
// 		"...Q",
// 		"Q...",
// 		"..Q."],
//
// 	["..Q.",  // 解法 2
// 		"Q...",
// 		"...Q",
// 		".Q.."]
// ]
// 解释: 4 皇后问题存在两个不同的解法。
