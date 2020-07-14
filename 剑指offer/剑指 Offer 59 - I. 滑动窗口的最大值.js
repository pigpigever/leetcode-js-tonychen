// 给定一个数组 nums 和滑动窗口的大小 k，请找出所有滑动窗口里的最大值。
//
// 示例:
//
//     输入: nums = [1,3,-1,-3,5,3,6,7], 和 k = 3
// 输出: [3,3,5,5,6,7]
// 解释:
//
//   滑动窗口的位置               最大值
// ---------------              -----
// [1  3  -1] -3  5  3  6  7      3
// 1 [3  -1  -3] 5  3  6  7       3
// 1  3 [-1  -3  5] 3  6  7       5
// 1  3  -1 [-3  5  3] 6  7       5
// 1  3  -1  -3 [5  3  6] 7       6
// 1  3  -1  -3  5 [3  6  7]      7

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
const maxSlidingWindow = function(nums, k) {
    let left = 0
    let right = 0
    let max = -Infinity
    const res = []
    while (right < nums.length) {
        max = Math.max(max, nums[right])
        if (right - left + 1 === k) {
            res.push(max)
            max = -Infinity
            right = ++left
        } else {
            right++
        }
    }
    return res
}

console.log(maxSlidingWindow([1,3,-1,-3,5,3,6,7], 3))
