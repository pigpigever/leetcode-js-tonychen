/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    if (ransomNote.length > magazine.length) {
        return false
    }
    let mgMap = new Map()
    for (let mg of magazine) {
        if (mgMap.has(mg)) {
            mgMap.set(mg, mgMap.get(mg) + 1)
        } else {
            mgMap.set(mg, 1)
        }
    }
    for (let note of ransomNote) {
        if (mgMap.has(note)) {
            const val = mgMap.get(note)
            if (val <= 0) {
                return false
            }
            mgMap.set(note, val - 1)
        } else {
            return false
        }
    }
    return true
};