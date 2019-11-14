/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
	let ans = 0, tmp = 0
	const INT_MAX = Math.pow(2, 31) - 1, INT_MIN = -Math.pow(2, 31)
	while (x) {
		tmp = x % 10
		x = (x / 10) >> 0
		ans = ans * 10 + tmp
		if (ans < INT_MIN || ans > INT_MAX) {
			return 0
		}
	}
	return ans
}