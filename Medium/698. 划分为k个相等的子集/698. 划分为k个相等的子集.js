/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
const canPartitionKSubsets = function(nums, k) {
    const helper = (index) => {
        if (index === k) {
            return true
        }
        for (let i = 0; i < nums.length; i++) {
            if (visited[i]) {
                continue
            }
            if (target === null) {

            }
        }
    }
    const visited = new Array(nums.length).fill(false)
    let target = null
    return helper(0)
}

console.log(canPartitionKSubsets([4, 3, 2, 3, 5, 2, 1], 4))

// 有可能将其分成 4 个子集（5），（1,4），（2,3），（2,3）等于总和。
