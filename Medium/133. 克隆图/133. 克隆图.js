/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

function Node(val, neighbors) {
    this.val = val === undefined ? 0 : val;
    this.neighbors = neighbors === undefined ? [] : neighbors;
}

/**
 * @param {Node} node
 * @return {Node}
 */
const cloneGraph = function(node) {
    const helper = (node) => {
        if (!node) {
            return null
        }
        if (map.has(node)) {
            return map.get(node)
        }
        const { val, neighbors } = node
        const root = new Node(val)
        map.set(node, root)
        for (let i = 0; i < neighbors.length; i++) {
            root.neighbors[i] = helper(neighbors[i])
        }
        return root
    }
    const map = new Map()
    return helper(node)
}

const first = new Node(1)
const second = new Node(2)
first.neighbors = [second]
second.neighbors = [first]

console.log(cloneGraph(first))
