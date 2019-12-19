/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function(letters, target) {
    let start = 0, end = letters.length
    while (start < end) {
        let middle = Math.floor((start + end) / 2)
        if (letters[middle] > target) {
            end = middle
        } else if (letters[middle] <= target) {
            start = middle + 1
        }
    }
    return letters[start % letters.length]
};