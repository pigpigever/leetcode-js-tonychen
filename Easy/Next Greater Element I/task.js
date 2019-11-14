/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    const map = new Map()
    const ans = []
    for (let i = 0; i < nums2.length; i++) {
        map.set(nums2[i], i)
    }
    for (const num of nums1) {
        const targetIndex = map.get(num)
        let flag = 0
        for (let i = targetIndex + 1; i < nums2.length; i++) {
            if (num < nums2[i]) {
                flag = i
                break
            }
        }
        ans.push(flag ? nums2[flag] : -1)
    }
    return ans
};
