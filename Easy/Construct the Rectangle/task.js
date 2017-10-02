/**
 * @param {number} area
 * @return {number[]}
 */
var constructRectangle = function(area) {
  var ops = [2, 3, 4, 5, 6, 7, 8, 9, 10],
    result = {},
    tag = false
  for (var i = 1; i * i <= area; i++) {
    var temp = Math.floor(area / i)
    if (area % i === 0 && temp >= i) {
      tag = true
      result[i] = result[i] == undefined ? temp : result[i]
    }
  }
  if(tag === false){
    result[1] = area
  }

  var min,index
  for (var item in result) {
    if (!min || min > result[item]) {
        min = result[item]
        index = item
    }
  }

  return [min,index-0]
};
