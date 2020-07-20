/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    const helper = (index, N, temp) => {
        if (index === len || N < 3) {
            return
        }
        for (let i = index; i < len; i++) {
            if (nums[i] === nums[i - 1]) {
                continue
            }
            if (N > 3) {
                helper(i + 1, N - 1, [nums[i], ...temp])
                continue
            }
            let left = i + 1
            let right = len - 1
            while (left < right) {
                let sum = nums[i] + nums[left] + nums[right] + temp.reduce((prev, curr) => prev + curr)
                if (sum === target) {
                    res.push([...temp, nums[i], nums[left], nums[right]])
                    while (left < right && nums[left] === nums[left + 1]) {
                        left++
                    }
                    while (left < right && nums[right] === nums[right - 1]) {
                        right--
                    }
                    left++
                    right--
                } else if (sum < target) {
                    left++
                } else {
                    right--
                }
            }
        }
    }
    let res = []
    let len = nums.length
    nums.sort((a, b) => a - b)
    helper(0, 4, [])
    return res
};

console.log(fourSum([1, 0, -1, 0, -2, 2], 0))