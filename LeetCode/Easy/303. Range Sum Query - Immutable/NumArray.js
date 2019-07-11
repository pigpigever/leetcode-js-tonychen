/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
    let tmp = [ 0 ]
    for (let i = 1; i <= nums.length; i++) {
        tmp[i] = tmp[i - 1] + nums[i - 1]
    }
    this.sum = tmp
};

/** 
 * @param {number} i 
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function(i, j) {
    return this.sum[j + 1] - this.sum[i]
};

/** 
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(i,j)
 */