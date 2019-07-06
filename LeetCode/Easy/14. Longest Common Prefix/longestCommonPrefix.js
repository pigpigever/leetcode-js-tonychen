/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
	if (!strs.length) {
		return ''
	}
	strs.sort((a,b) => a.length > b.length ? 1 : -1)
	let target = strs[0], tmp = ''

	for (let i = 0; i < target.length; i++) {
		for (let j = 1; j < strs.length; j++) {
			if (target[i] !== strs[j][i]) {
				return tmp
			}
		}
		tmp += target[i]
	}
	return tmp
};
