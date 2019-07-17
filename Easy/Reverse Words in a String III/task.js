    /**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    var result=s.split(" ");
    console.log(result.length);
    console.log(result);
    for(var i=0;i<result.length;i++){
        result[i]=result[i].split("").reverse().join("");
    }
    return result.join(" ");
};