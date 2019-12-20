/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var findBottomLeftValue = function (root) {
    const queue = [root]
    while (queue.length) {
        root = queue.shift()
        if (root.right) {
            queue.unshift(root.right)
        }
        if (root.left) {
            queue.unshift(root.left)
        }
    }
    return root.val
};