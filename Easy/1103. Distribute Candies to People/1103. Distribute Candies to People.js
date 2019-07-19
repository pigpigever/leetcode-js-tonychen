/**
 * @param {number} candies
 * @param {number} num_people
 * @return {number[]}
 */
var distributeCandies = function(candies, num_people) {
    let offset = 1
    let result = Array(num_people).fill(0);
    while (candies) {
        for (let i = 0; i < num_people; i++) {
            if (candies <= offset) {
                result[i] += candies
                return result
            } else {
                result[i] += offset
                candies -= offset
                offset++
            }
        }
    }
};
