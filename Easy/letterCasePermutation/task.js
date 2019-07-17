/**
 * @param {string} S
 * @return {string[]}
 */
var letterCasePermutation = function(S) {
	const result = [ S ]
	dfs(result, S, 0)
	return result
};

function dfs (result, S, start) {
	for (let i = start; i < S.length; i++) {
		if (/[a-zA-Z]/.test(S[i])) {
			let tmp = S.split('')
			if (/[a-z]/.test(S[i])) {
				tmp[i] = tmp[i].toUpperCase()
			} else {
				tmp[i] = tmp[i].toLowerCase()
			}
			result.push(tmp.join(''))
			dfs(result, tmp.join(''), i + 1)
		}
	}
}

console.log(letterCasePermutation("a1b2"))

