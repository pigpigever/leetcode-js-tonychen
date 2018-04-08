/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    var set = new Set()
    nums1.map(function(item){
        if(nums2.indexOf(item) !== -1){
            set.add(item)
        }
    })
    return [...set]
};