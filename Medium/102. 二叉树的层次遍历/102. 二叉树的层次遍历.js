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
var levelOrder = function(root) {
    if (!root) {
        return []
    }
    const queue = [root]
    const nodes = []
    while (queue.length) {
        let count = queue.length
        const tmp = []
        while (count--) {
            const root = queue.shift()
            tmp.push(root.val)
            if (root.left) {
                queue.push(root.left)
            }
            if (root.right) {
                queue.push(root.right)
            }
        }
        nodes.push(tmp.slice())
    }
    return nodes
};