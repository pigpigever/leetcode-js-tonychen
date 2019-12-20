/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function(nums) {
    let start = 0, end = nums.length - 1;
    while (start < end) {
        while (isEven(nums[start]) && start < end) {
            start++
        }
        while (!isEven(nums[end]) && start < end) {
            end--
        }
        swap(start, end)
    }
    return nums
    
    function isEven (num) {
        return num % 2 === 0
    }
    function swap (start, end) {
        const tmp = nums[start]
        nums[start] = nums[end]
        nums[end] = tmp
    }
};