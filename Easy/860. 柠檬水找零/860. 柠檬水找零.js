/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(bills) {
    let first = 0, second = 0
    for (let i = 0; i < bills.length; i++) {
        if (bills[i] === 5) {
            first++
        } else if (bills[i] === 10) {
            if (first >= 1) {
                first--, second++
                continue
            }
            return false
        } else if (bills[i] === 20) {
            if (second >= 1 && first >= 1) {
                first--, second--
                continue
            }
            if (first >= 3) {
                first -= 3
                continue
            }
            return false
        }
    }
    return true
};