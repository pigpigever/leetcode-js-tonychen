/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */
/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head) {
    let map = new Map()
    let p = head

    while (p) {
        map.set(p, new Node(p.val))
        p = p.next
    }
    p = head
    while (p) {
        map.get(p).next = map.get(p.next)
        map.get(p).radom = map.get(p.random)
        p = p.next
    }
    return map.get(head)
};
