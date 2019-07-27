/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean} 
*/
var hasCycle = function(head) {
    if (!head || !head.next) {
        return false
    }
    let slow = head, fast = head.next
    while (slow && fast) {
        if (slow.val === fast.val) {
            return true
        }
        slow = slow.next
        fast = fast.next && fast.next.next
    }
    return false
};