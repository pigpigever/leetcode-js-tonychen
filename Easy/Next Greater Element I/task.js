/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    const stack = [], map = new Map()
    for (const num of nums2) {
        while (stack.length && num > stack[0]) {
            map.set(stack.shift(), num)
        }
        stack.unshift(num)
    }
    while (stack.length) {
        map.set(stack.shift(), -1)
    }
    return nums1.map((num) => map.get(num))
};