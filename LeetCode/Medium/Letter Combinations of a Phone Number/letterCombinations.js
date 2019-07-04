/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
	if (!digits) {
		return []
	}
	let letter = {
		'2': [ 'a', 'b', 'c' ],
		'3': [ 'd', 'e', 'f' ],
		'4': [ 'g', 'h', 'i' ],
		'5': [ 'j', 'k', 'l' ],
		'6': [ 'm', 'n', 'o' ],
		'7': [ 'p', 'q', 'r', 's' ],
		'8': [ 't', 'u', 'v' ],
		'9': [ 'w', 'x', 'y', 'z' ]
	}
	let result = []

	dfs(0, [])
	return result

	function dfs (index, tmp) {
		if (index === digits.length) {
			result.push(tmp.join(''))
			return
		}
		let j = digits[index]
		for (let i = 0; i < letter[j].length; i++) {
			tmp.push(letter[j][i])
			dfs(index + 1, tmp)
			tmp.pop()
		}
	}
};

console.log(letterCombinations("23"))
