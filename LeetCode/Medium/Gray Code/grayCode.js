/**
 * @param {number} n
 * @return {number[]}
 */
var grayCode = function(n) {
	let arr = [ '0', '1' ]

	if (!n) {
		return [ 0 ]
	}
	for (let i = 2; i <= n; i++) {
		for (let j = 0; j < Math.pow(2, i - 1); j++) {
			arr[j] = '0' + arr[j]
		}
		for (let j = Math.pow(2, i - 1) - 1; j >= 0; j--) {
			let tmp = arr[j].split('')
			tmp[0] = '1'
			arr.push(tmp.join(''))
		}
	}
	return arr.map((item) => parseInt(item, 2))
};

grayCode(3)

// 0 0 0
// 0 0 1
// 0 1 1
// 0 1 0
// 1 1 0
// 1 1 1
// 1 0 1
// 1 0 0
