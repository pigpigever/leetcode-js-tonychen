/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if (!root) {
        return []
    }
    const res = [], queue = [root]
    while (queue.length) {
        let count = queue.length
        const tmp = []
        while (count--) {
            const root = queue.shift()
            tmp.push(root.val)
            for (let i = 0; i < root.children.length; i++) {
                queue.push(root.children[i])
            }
        }
        res.push(tmp.slice())
    }
    return res
};