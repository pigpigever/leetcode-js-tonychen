/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
	let chess = [], result = []

	init()
	dfs(0)
	return result

	function dfs (index) {
		if (index === n) {
			let tmp = JSON.parse(JSON.stringify(chess))
			result.push(tmp.map((item) => item.join('')))
		}
		for (let j = 0; j < n; j++) {
			if (isOk(index, j)) {
				chess[index][j] = 'Q'
				dfs(index + 1)
				chess[index][j] = '.'
			}
		}
	}
	function isOk (x, y) {
		// 判断上方
		for (let i = 0; i < x; i++) {
			if (chess[i][y] === 'Q') {
				return false
			}
		}
		// 判断左上方
		for (let i = x - 1, j = y - 1; i >= 0 && j >= 0; i--, j--) {
			if (chess[i][j] === 'Q') {
				return false
			}
		}
		// 判断右上方
		for (let i = x - 1, j = y + 1; i >= 0 && j < n; i--, j++) {
			if (chess[i][j] === 'Q') {
				return false
			}
		}
		return true
	}
	function init () {
		for (let i = 0; i < n; i++) {
			chess[i] = []
			for (let j = 0; j < n; j++) {
				chess[i][j] = '.'
			}
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
