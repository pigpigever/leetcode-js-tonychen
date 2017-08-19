/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
    var a=0,b=0,c=false;
    for(var i=0;i<word.length;i++){
        if(word[i].toUpperCase()===word[i]){
            a++;
        }
        if(word[i].toLowerCase()===word[i]){
            b++;
        }
        if(word[0].toUpperCase()==word[0]){
            c=true;
        }
    }
    if(a==word.length||b==word.length||(c&&b==word.length-1)){
        return true;
    }
    return false;
};