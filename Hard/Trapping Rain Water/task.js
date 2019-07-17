/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
	let left = 0, right = height.length - 1, result = 0
	const stack = []

	while (left < right) {
		let top = stack[0]


		left++
	}
	return result
};

console.log('result -->', trap([0,1,0,3,1,0,1,3,2,1,2,1]))
