/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    var temp=num.toString();
    while(temp.length!=1)
    {
        var sum=0;
        for(var i=0;i<temp.length;i++)
        {
            sum+=parseInt(temp[i]);
        }
        temp=sum+"";
    }
    return parseInt(temp);
};