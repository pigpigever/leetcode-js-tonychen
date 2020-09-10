/**
 * @param {string} s
 * @return {string}
 */
const sortString = function(s) {
    let arr = s.split('').sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0))
    let res = []
    while (arr.length) {
        let j = 0
        let str = ''
        let temp = []
        // 上升字符串
        while (j < arr.length) {
            if (!str || str.charAt(str.length - 1) < arr[j]) {
                str += arr[j]
            } else {
                temp.push(arr[j])
            }
            j++
        }
        res.push(str)
        arr = temp.slice()
        j = arr.length
        temp = []
        str = ''
        // 下降字符串
        while (--j >= 0) {
            if (!str || str[str.length - 1] > arr[j]) {
                str += arr[j]
            } else {
                temp.unshift(arr[j])
            }
        }
        arr = temp
        res.push(str)
    }
    return res.join('')
}

console.log(sortString("aaaabbbbcccc"))
