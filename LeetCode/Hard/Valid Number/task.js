/**
 * @param {string} s
 * @return {boolean}
 */
//解法1
var isNumber = function (s) {
    let reg = /^\s*[-+]?(\d+\.?|\.\d+)\d*(e[-+]?\d+)?\s*$/
    return reg.test(s)
};

//解法2
var isNumber = function (s) {
    return (Number(s) === 0 || !!Number(s)) && s.trim() !== ''
};

console.log(isNumber('2'))