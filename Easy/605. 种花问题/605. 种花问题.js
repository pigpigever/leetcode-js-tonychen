/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    let len = flowerbed.length, i = 0
    while (i < len && n > 0) {
        if (!flowerbed[i] && (i - 1 == -1 || !flowerbed[i - 1]) && (i + 1 == len || !flowerbed[i + 1])) {
            flowerbed[i] = 1
            n--
        }
        i++
    }
    return n === 0
};