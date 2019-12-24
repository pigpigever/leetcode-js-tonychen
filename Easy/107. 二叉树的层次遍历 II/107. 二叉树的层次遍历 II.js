/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
    if (!root) {
        return []
    }
    const res = [], queue = [root]
    while (queue.length) {
        let count = queue.length
        const tmp = []
        while (count--) {
            const root = queue.shift(), left = root.left, right = root.right
            tmp.push(root.val)
            if (left) {
                queue.push(left)
            }
            if (right) {
                queue.push(right)
            }
        }
        res.unshift(tmp.slice())
    }
    return res
};