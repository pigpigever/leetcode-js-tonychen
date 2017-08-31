/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    let temp = []
    for(let i=0;i<nums1.length;i++){
        temp[nums1[i]] = temp[nums1[i]] + 1 || 1
    }
    return nums2.filter(item=>{
        if(temp[item]){
            temp[item]--
            return true
        }
    })
};