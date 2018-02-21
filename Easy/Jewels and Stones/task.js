/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function (J, S) {
    let jewels = [...new Set(J.split(''))],
        stones = S.split(''),
        count = 0
    for (let i = 0; i < jewels.length; i++) {
        for (let item of stones) {
            if (jewels[i] === item) {
                count++
            }
        }
    }
    return count
};

console.log(numJewelsInStones("aaA", "aAAbbbb"))