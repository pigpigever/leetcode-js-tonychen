/**
 * // Definition for a Node.
 * function Node(val, left, right, random) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.random = next === undefined ? null : random;
 * };
 */

/**
 * @param {Node} root
 * @return {NodeCopy}
 */
const copyRandomBinaryTree = function(root) {
    const copy = (root) => {
        if (!root) {
            return null
        }
        if (cache.has(root)) {
            return cache.get(root)
        }
        const { val, left, right, random } = root
        const copyRoot = new NodeCopy(val)
        cache.set(root, copyRoot)
        copyRoot.left = copy(left)
        copyRoot.right = copy(right)
        copyRoot.random = copy(random)
        return copyRoot
    }
    const cache = new Map()
    return copy(root)
}
