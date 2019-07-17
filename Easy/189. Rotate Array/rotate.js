/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    let count = 0, current = 0
    for (let i = 0; count < nums.length; i++) {
        let current  = i
        let next = nums[current], pre
        do {
            current = (current + k) % nums.length
            let tmp = nums[current]
            nums[current] = next
            pre = next
            next = tmp
            count++
        } while (i !== current)
    }
};

console.log(rotate([1,2,3,4,5,6],2))