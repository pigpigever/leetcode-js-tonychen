/**
 * @param {number[]} nums
 * @return {string[]}
 */
var findRelativeRanks = function (nums) {
    let result = []
    const reward = ['Gold Medal', 'Silver Medal', 'Bronze Medal']
    for (let i = 0; i < nums.length; i++) {
        let j = 0,
            counter = 0
        while (j < nums.length) {
            if (nums[i] < nums[j++]) {
                counter++
            }
        }
        counter < 3 ? result.push(reward[counter]) : result.push(`${counter + 1}`)
    }
    return result
};