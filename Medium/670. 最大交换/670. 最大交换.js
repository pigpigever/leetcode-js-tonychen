/**
 * @param {number} num
 * @return {number}
 */
const maximumSwap = function(num) {
    const arr = String(num).split('')
    const temp = arr.slice().sort((a, b) => b - a)
    let flag = -1
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < temp[i]) {
            flag = i
            break
        }
    }
    if (flag < 0) {
        return num
    }
    for (let i = arr.length - 1; i > flag; i--) {
        if (arr[i] === temp[flag]) {
            [arr[i], arr[flag]] = [arr[flag], arr[i]]
            break
        }
    }
    return parseInt(arr.join(''))
}
