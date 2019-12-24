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
    const res = []
    const dfs = (node, level) => {
        if (!node) {
            return 
        }
        const index = res.length - level - 1
        if (index < 0) {
            res.unshift([node.val])
        } else {
            res[index].push(node.val)
        }
        dfs(node.left, level + 1)
        dfs(node.right, level + 1)
    }
    dfs(root, 0)
    return res
};