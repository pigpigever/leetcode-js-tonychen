/**
 * @param {number[]} nums
 * @return {number}
 */
const thirdMax = function (nums) {
    const res = [-Infinity, -Infinity, -Infinity];
    nums.forEach(num => {
        if (res[0] < num) {
            res[2] = res[1];
            res[1] = res[0];
            res[0] = num;
        } else if (res[1] < num && num !== res[0]) {
            res[2] = res[1];
            res[1] = num;
        } else if (res[2] < num && num !== res[1] && num !== res[0]) {
            res[2] = num;
        }
    });
    if (res[2] === -Infinity) {
        return res[0];
    }
    return res[2];
};
