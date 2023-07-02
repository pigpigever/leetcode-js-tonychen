/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
const divide = function(dividend, divisor) {
  const result = parseInt(dividend / divisor)
  const max = Math.pow(2, 31) - 1
  return Math.min(result, max)
};

module.exports = divide