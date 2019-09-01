/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
    if (!head) {
        return head
    }
    let slow = head, fast = head.next
    while (fast) {
        slow = slow.next
        fast = fast.next && fast.next.next
    }
    return slow
};