/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
  if (!obstacleGrid || !obstacleGrid.length) {
    return 0
  }
  const map = new Map()
  const row = obstacleGrid.length
  const col = obstacleGrid[0].length
  const helper = (i, j) => {
    if (i === row - 1 && j === col - 1 && obstacleGrid[i][j] === 0) {
      return 1
    } else if (i === row || j === col) {
      return 0
    }
    const key = `${i}-${j}`
    if (map.has(key)) {
      return map.get(key)
    }
    if (obstacleGrid[i][j] === 1) {
      return 0
    }
    const res = helper(i + 1, j) + helper(i, j + 1)
    map.set(key, res)
    return res
  }
  return helper(0, 0)
};