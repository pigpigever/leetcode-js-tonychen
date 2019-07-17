/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
	let str = x + '', len = str.length, middle = Math.floor(len / 2)

	for (let i = 0; i < middle; i++) {
		if (str[i] !== str[len - i - 1]) {
			return false
		}
	}
	return true
};
