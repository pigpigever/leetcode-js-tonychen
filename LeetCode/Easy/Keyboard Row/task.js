/**
     * @param {string[]} words
     * @return {string[]}
     */
    var findWords = function(words) {
        var dic=['Q','W','E','R','T','Y','U','I','O','P','A','S','D','F','G','H','J','K','L','Z','X','C','V','B','N','M'],
                result=[];
        var b=new Map();
        for(var i=0;i<dic.length;i++){
            if(i<=9){
                b.set(dic[i],'the row 1');
            }
            else if(i<=18){
                b.set(dic[i],'the row 2');
            }
            else{
                b.set(dic[i],'the row 3');
            }

        }
        for(var i=0;i<words.length;i++){
            var tag=b.get(words[i][0].toUpperCase()),isTrue=true;
            for(var j=0;j<words[i].length;j++){
                if(tag!==b.get(words[i][j].toUpperCase())){
                    isTrue=false;
                    break;
                }
            }
            if(isTrue){
                result.push(words[i]);
            }
        }
        return result;
    };