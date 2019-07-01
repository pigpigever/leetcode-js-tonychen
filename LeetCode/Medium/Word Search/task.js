// Given a 2D board and a word, find if the word exists in the grid.
//
// 	The word can be constructed from letters of sequentially adjacent cell, where "adjacent" cells are those horizontally or vertically neighboring. The same letter cell may not be used more than once.
//
// 	Example:
//
// board =
// 	[
// 		['A','B','C','E'],
// 		['S','F','C','S'],
// 		['A','D','E','E']
// 	]
//
// Given word = "ABCCED", return true.
// 	Given word = "SEE", return true.
// 	Given word = "ABCB", return false.

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
	const visited = board.map((item) => {
		return item.map(() => false)
	})

	function dfs (x, y, index) {
		if (index === word.length) {
			return true
		}
		if (x < 0 || x >= board.length || y < 0 || y >= board[x].length || board[x][y] !== word[index] || visited[x][y]) {
			return false
		}
		visited[x][y] = true
		const result = dfs(x + 1, y, index + 1) ||
			           dfs(x - 1, y, index + 1) ||
			           dfs(x, y - 1, index + 1) ||
			           dfs(x, y + 1, index + 1)
		visited[x][y] = false
		return result
	}
	for (let i = 0; i < board.length; i++) {
		for (let j = 0; j < board[i].length; j++) {
			if (dfs(i, j, 0)) {
				return true
			}
		}
	}
	return false
}

console.log(exist([["a","a"]],'aaa'))
