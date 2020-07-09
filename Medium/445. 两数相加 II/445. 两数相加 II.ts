/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    const reverseList = (list: ListNode | null) => {
        if (!list) {
            return null
        }
        let head: ListNode | null = list
        let prev: ListNode | null = list
        let curr: ListNode | null = list.next
        while (curr) {
            const next: ListNode | null = curr.next
            curr.next = head
            prev.next = next
            head = curr
            curr = next
        }
        return head
    }
    const addList = (l1: ListNode | null, l2: ListNode | null): ListNode | null => {
        if (!l1 && !l2) {
            return null
        }
        const first: number = l1 ? l1.val : 0
        const second: number = l2 ? l2.val : 0
        const val = first + second + carry
        const currNode: ListNode = new ListNode(val % 10)
        carry = Math.floor(val / 10)
        currNode.next = addList(l1 ? l1.next : null, l2 ? l2.next : null)
        return currNode
    }
    let carry = 0
    const res: ListNode | null = reverseList(addList(reverseList(l1), reverseList(l2)));
    const head: ListNode = carry ? new ListNode(carry) : res
    if (carry) {
        head.next = res
    }
    return head
}
