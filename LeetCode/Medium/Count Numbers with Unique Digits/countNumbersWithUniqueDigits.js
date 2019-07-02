/**
 * @param {number} n
 * @return {number}
 */
var countNumbersWithUniqueDigits = function(n) {
	if (n === 0) {
		return 1
	}
	n = Math.min(n, 10)
	let ret = 9
	for (let i = 1, calc = 9; i < n; i++) {
		calc *= 10 - i
		ret += calc
	}
	return ret + 1
};

countNumbersWithUniqueDigits(3)
