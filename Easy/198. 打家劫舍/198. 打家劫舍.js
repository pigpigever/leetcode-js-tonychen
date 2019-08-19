/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    let cur = 0, pre = 0
    for (let i = 0; i < nums.length; i++) {
        let tmp = cur
        cur = Math.max(pre + nums[i], cur)
        pre = tmp
    }
    return cur
};

// console.log(rob([2,1,1,2]))
// console.log(rob([1,2,3,1]))
console.log(rob([2,7,9,3,1]))