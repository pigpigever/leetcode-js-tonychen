/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    const dfs = (root, str) => {
        if (!root) {
            return
        }
        str += str ? `->${root.val}` : `${root.val}`
        if (!root.left && !root.right) {
            res.push(str)
            return
        }
        dfs(root.left, str)
        dfs(root.right, str)
    }
    const res = []
    dfs(root, '')
    return res
};