/**
 * 哈希表找交集
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const intersect = function(nums1, nums2) {
    const map = new Map()
    const res = []
    nums1.forEach((num) => {
        map.set(num, map.get(num) ? map.get(num) + 1 : 1)
    })
    nums2.forEach((num) => {
        if (map.has(num)) {
            const val = map.get(num)
            res.push(num)
            if (val <= 1) {
                map.delete(num)
            } else {
                map.set(num, val - 1)
            }
        }
    })
    return res
}

/**
 * 先排序再找交集
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const intersect2 = function(nums1, nums2) {
    const res = []
    let i = 0
    let j = 0
    nums1.sort((a, b) => a - b)
    nums2.sort((a, b) => a - b)
    while (i < nums1.length && j < nums2.length) {
        if (nums1[i] !== nums2[j]) {
            if (nums1[i] < nums2[j]) {
                i++
            } else {
                j++
            }
        } else {
            res.push(nums1[i])
            i++
            j++
        }
    }
    return res
}

console.log(intersect2([1,2,2,1], [2, 2]))
