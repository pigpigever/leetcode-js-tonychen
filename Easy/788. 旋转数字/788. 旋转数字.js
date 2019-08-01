/**
 * @param {number} N
 * @return {number}
 */
var rotatedDigits = function(N) {
    let ans = 0
    for (let i = 1; i <= N; i++) {
        if (isGoodNum(i)) {
            ans++
        }
    }
    return ans
    function isGoodNum (num) {
        let flag = false
        while (num > 0) {
            let tmp = num % 10
            if ([0,1,2,5,6,8,9].every((item) => item !== tmp)) {
                return false
            }
            if ([2,5,6,9].some((item) => item === tmp) && !flag) {
                flag = true
            } 
            num = Math.floor(num / 10)
        }
        return flag
    }
};