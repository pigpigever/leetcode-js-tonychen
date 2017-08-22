/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    let note = Array.prototype.slice.call(ransomNote),
        mz = Array.prototype.slice.call(magazine),
        counter = 0
    for(let i=0;i<note.length;i++){
        for(let j=0;j<mz.length;j++){
            if(note[i] == mz[j]){
                mz.splice(j,1)
                counter++
                break
            }
        }
    }
    if(counter === note.length){
        return true
    }
    return false
};