/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
const serialize = function(root) {
    if (!root) {
        return ''
    }
    const queue = [root]
    const res = []
    while (queue.length) {
        let length = queue.length
        while (length--) {
            const curr = queue.shift()
            if (curr) {
                const { val, left, right } = curr
                res.push(val)
                queue.push(left)
                queue.push(right)
            } else {
                res.push(curr)
            }
        }
    }
    while (res[res.length - 1] == null) {
        res.pop()
    }
    return JSON.stringify(res)
}

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
const deserialize = function(data) {
    if (!data) {
        return null
    }
    const org = JSON.parse(data)
    const prev = { left: null }
    const root = new TreeNode(org.shift())
    const queue = [root]
    while (queue.length) {
        let length = queue.length
        while (length--) {
            const curr = queue.shift()
            if (curr) {
                const leftVal = org.shift()
                const rightVal = org.shift()
                if (leftVal != null) {
                    curr.left = new TreeNode(leftVal)
                }
                if (rightVal != null) {
                    curr.right = new TreeNode(rightVal)
                }
                queue.push(curr.left)
                queue.push(curr.right)
            }
        }
    }
    return root
}

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */