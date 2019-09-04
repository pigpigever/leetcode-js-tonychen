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
var deleteDuplicates = function(head) {
    let firstPre = '', flag = false
    let primtive = new ListNode(), target = primtive, next = head, pre = ''
    primtive.next = head
    while (target) {
        if (target.val === (next && next.val)) {
            firstPre = flag ? firstPre : pre
            flag = true
        } else if (flag) {
            firstPre.next = next
            target = firstPre
            flag = false
        }
        pre = target
        target = target.next
        next = next && next.next
    }
    return primtive.next
};