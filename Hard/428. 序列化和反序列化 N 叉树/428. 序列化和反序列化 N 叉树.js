/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

class Codec {
    constructor() {

    }

    /** 
     * @param {Node} root
     * @return {string}
     */
    // Encodes a tree to a single string.
    serialize = function (root) {
        const helper = (root) => {
            if (!root) {
                return null
            }
            const { children, val } = root
            const res = { val, children: [] }
            for (let i = 0; i < children.length; i++) {
                res.children.push(helper(children[i]))
            }
            return res
        }
        const res = helper(root)
        return JSON.stringify(res)
    }

    /** 
     * @param {string} data 
     * @return {Node}
     */
    // Decodes your encoded data to tree.
    deserialize = function (data) {
        const helper = (org) => {
            if (!org) {
                return null
            }
            const { val, children } = org
            const root = new Node(val, [])
            for (let i = 0; i < children.length; i++) {
                root.children[i] = helper(children[i])
            }
            return root
        }
        if (!data) {
            return null
        }
        return helper(JSON.parse(data))
    }
}

// Your Codec object will be instantiated and called as such:
// Codec codec = new Codec();
// codec.deserialize(codec.serialize(root));