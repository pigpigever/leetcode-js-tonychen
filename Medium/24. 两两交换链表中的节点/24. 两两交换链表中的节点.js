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
var swapPairs = function(head) {
    if (!head) {
        return head
    }
    let slow = head, fast = head.next
    let ans = fast ? fast : slow
    let pre = new ListNode()

    pre.next = head
    while (fast) {
        let tmp = slow
        let next = fast.next
        slow = fast
        fast = tmp
        slow.next = fast
        fast.next = next
        pre.next = slow
        pre = pre.next.next
        slow = slow.next.next
        fast = fast.next && fast.next.next
    }
    return ans
};