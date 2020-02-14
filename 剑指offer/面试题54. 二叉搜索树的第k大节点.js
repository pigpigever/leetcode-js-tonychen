/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthLargest = function(root, k) {
    const dfs = (root) => {
        if (!root) {
            return
        }
        dfs(root.left)
        res.push(root.val)
        dfs(root.right)
    }
    const res = []
    dfs(root)
    return res[res.length - k]
};