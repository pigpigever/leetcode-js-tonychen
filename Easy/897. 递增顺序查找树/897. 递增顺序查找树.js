/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var increasingBST = function(root) {
    const dfs = (root) => {
        if (!root) {
            return
        }
        dfs(root.left)
        arr.push(root.val)
        dfs(root.right)
    }
    const helper = (index) => {
        if (!arr.length || index === arr.length) {
            return null
        }
        const node = new TreeNode(arr[index])
        node.right = helper(index + 1)
        return node
    }
    const arr = []
    dfs(root)
    return helper(0)
};