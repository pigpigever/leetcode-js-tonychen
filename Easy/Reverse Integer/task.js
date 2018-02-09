/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
	let temp = ''
	
	if (x > 0) {
		temp = String(x).split('').reverse().join('')
	} else {
		temp = String(-x).split('').reverse().join('')
	}
	let result = x > 0 ? Number(temp) : -1 * Number(temp)
	if (result > Math.pow(2, 31) - 1 || result < -Math.pow(2, 31)) {
		return 0
	}
	return result
};

console.log(reverse(1534236469))