/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
const generateTrees = function(n) {
    const helper = (start, end) => {
        if (start > end) {
            return [null]
        }
        let res = []
        for (let i = start; i <= end; i++) {
            const left = helper(start, i - 1)
            const right = helper(i + 1, end)
            for (let j = 0; j < left.length; j++) {
                for (let k = 0; k < right.length; k++) {
                    const root = new TreeNode(i)
                    root.left = left[j]
                    root.right = right[k]
                    res.push(root)
                }
            }
        }
        return res
    }
    if (n === 0) {
        return []
    }
    return helper(1, n)
}
