/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var getKthFromEnd = function(head, k) {
    /**
     * 获取列表长度
     * @param {ListNode} node 
     */
    const getListLength = (node) => {
        let len = 0
        while (node) {
            node = node.next
            len++
        }
        return len
    }
    if (!head) {
        return null
    }
    let len = getListLength(head)
    let p = head
    let start = len - k, count = 0
    while (count !== start && p) {
        p = p.next
        count++
    }
    return p
};