// 在一个数组 nums 中除一个数字只出现一次之外，其他数字都出现了三次。请找出那个只出现一次的数字。
/**
 * @param {number[]} nums
 * @return {number}
 */
const singleNumber = function(nums) {
    const map = new Map()
    nums.forEach((num) => {
        if (map.has(num)) {
            map.set(num, map.get(num) + 1)
        } else {
            map.set(num, 1)
        }
    })
    for (const [key, val] of map) {
        if (val === 1) {
            return key
        }
    }
    return -1
}

console.log(singleNumber([3,3,3,2,2,2,1,4,4,4]))
