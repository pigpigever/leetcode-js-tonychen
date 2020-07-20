/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
    if (!root) {
        return
    }
    flatten(root.left)
    const left = root.left
    const right = root.right
    root.right = left
    if (left) {
        left.right = right
    }
};