/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @return {TreeNode}
 */
var bstFromPreorder = function(preorder) {
    const dfs = (root, index) => {
        for (let i = index; i < preorder.length; i++) {
            if (preorder[i] < root.val) {
                root.left = new TreeNode(root.val)
            } else {
                root.right = new TreeNode(root.val)
            }
            dfs(root.left, index)
            dfs(root.right, index)
        }
    }
    if (!preorder.length) {
        return null
    }
    const root = new TreeNode(preorder[0])
    return dfs(root, 1)
};