// Given n non-negative integers a1, a2, ..., an , where each represents a point at coordinate (i, ai). n vertical
// lines are drawn such that the two endpoints of line i is at (i, ai) and (i, 0). Find two lines, which together
// with x-axis forms a container, such that the container contains the most water.
//
// 	Note: You may not slant the container and n is at least 2.

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
	let left = 0, right = height.length - 1
	let max = 0

	while (left < right) {
		if (height[left] < height[right]) {
			max = Math.max((right - left) * height[left], max)
			left++
		} else {
			max = Math.max((right - left) * height[right], max)
			right--
		}
	}
	return max
};

console.log(maxArea([10,8,6,2,5,4,8,3,7]))
