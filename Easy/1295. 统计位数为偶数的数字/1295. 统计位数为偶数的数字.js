/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(nums) {
    const isEven = (num) => {
        let count = 0
        while (num) {
            num = Math.floor(num / 10)
            count++
        }
        return count % 2 === 0
    }
    let count = 0
    for (const num of nums) {
        if (isEven(num)) {
            count++
        }
    }
    return count
};