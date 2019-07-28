/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number}
 */
var maxDepth = function(root) {
    let ans = 0
    dfs(root, 0)
    return ans
    function dfs (root, sum) {
        if (root) {
            if (root.children) {
                for (let i = 0; i < root.children.length; i++) {
                    dfs(root.children[i], sum + 1)
                }
            }
            ans = Math.max(sum + 1, ans)
        }
    }
};