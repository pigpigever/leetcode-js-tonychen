/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    let i = 0, j = Math.floor(x >>> 1) + 1
    
    while (i < j) {
        let mid = Math.floor((i + j) >>> 1)
        if (mid * mid > x ) {
            j = mid
        } else if (mid * mid < x) {
            i = mid + 1
        } else {
            return mid
        }
    }
    return i - 1 === 0 ? 1 : i - 1
};

console.log(mySqrt(1))
// 输入: 8
// 输出: 2
// 说明: 8 的平方根是 2.82842..., 
//      由于返回类型是整数，小数部分将被舍去。