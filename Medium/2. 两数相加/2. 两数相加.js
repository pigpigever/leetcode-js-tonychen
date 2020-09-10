/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    const getListLength = (node) => {
        if (!node) {
            return 0
        }
        let fast = node.next
        let count = 1
        while (fast && fast.next) {
            count++
            fast = fast.next.next
        }
        if (fast) {
            return count * 2
        }
        return count * 2 - 1
    }
    const add = (l1, l2) => {
        while (l1) {
            const sum = l1.val + l2.val + carry
            l1.val = sum % 10
            carry = Math.floor(sum / 10)
            last = l1
            l1 = l1.next
            l2 = l2.next
        }
    }
    if (!l1 && !l2) {
        return null
    }
    if (l1 && !l2) {
        return l1
    }
    if (!l1 && l2) {
        return l2
    }
    const list1Len = getListLength(l1)
    const list2Len = getListLength(l2)
    const max = Math.max(list1Len, list2Len)
    const min = Math.min(list1Len, list2Len)
    let maxList = list1Len === max ? l1 : l2
    let minList = list1Len === min ? l1 : l2
    let count = max - min
    let prev = minList
    while (count  > 0) {
        const node = new ListNode(0)
        prev.next = node
        prev = node
        count--
    }
    let carry = 0
    let last = null
    add(minList, maxList)
    if (carry) {
        last.next = new ListNode(carry)
    }
    return minList
};