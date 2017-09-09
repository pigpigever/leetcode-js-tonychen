/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function (moves) {
    let result = [0, 0]
    moves.split('').forEach(item => {
        switch (item) {
            case 'U':
                result[0]++
                break
            case 'D':
                result[0]--
                break
            case 'R':
                result[1]++
                break
            case 'L':
                result[1]--
                break
            default:
                break
        }
    })
    return !result[0] && !result[1]
};