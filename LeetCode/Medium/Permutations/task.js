// Given a collection of distinct integers, return all possible permutations.

// Example:

// Input: [1,2,3]
// Output:
// [
//   [1,2,3],
//   [1,3,2],
//   [2,1,3],
//   [2,3,1],
//   [3,1,2],
//   [3,2,1]
// ]
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
let result = []
let temp = []

function swap (nums, i, j) {
	let tmp = nums[i]
	nums[i] = nums[j]
	nums[j] = tmp
}

var permute = function(nums, index) {
	if (index === nums.length) {
		result.push(nums.slice())
		return
	}
    for (let i = index; i < nums.length; i++) {
		swap(nums, i, index)
		permute(nums, index + 1)
		swap(nums, i, index)
	}
};

permute([1, 2, 3, 4], 0)

// pSwap([1, 2, 3], 0, 1)
console.log('result --->', result)
// 对于输入 [1, 2, 3]

//       1           2         3     
//     2  3       1   3      1  2
//   3      2   3      1   2     1

//            1                        2                                    3                                      4
//    2      3       4          1      3       4               1            2          4               1           2           3
//  3  4    2  4    2  3      3  4    1  4    1  3          2    4       1    4      1   2         2     3      1     3     1     2
// 4   3   4    2  3    2    4    3  4    1  3    1       4       2    4       1   2       1     3         2   3        1  2        1

// 1234 1243
// 1324 1342
// 1423 1432

// 显然可以找出规律，总结如下：

// 对于长度为3，值为：[1, 2, 3]的数组有：

// 第一层逐层遍历，然后push进入数组

// 第二层：传入下标：1， 0 跟 1 互换，按序输出  2   3
// 第三层：传入下表：2， 1 跟 2 互换，按序输出  3   2

// 对于长度为4，值为：[1, 2, 3, 4]的数组有：

// 第一层同样也是逐层遍历，然后push进数组

// 第二层，传入下表：1，0 跟 1 互换，按序输出 2 3 4