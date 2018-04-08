/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    let temp = nums1.concat(nums2).sort((a, b) => (a - b))
    let mid = Math.floor(temp.length / 2)
    if (temp.length % 2 !== 0) {
        return temp[mid]
    }
    return (temp[mid - 1] + temp[mid]) / 2
};