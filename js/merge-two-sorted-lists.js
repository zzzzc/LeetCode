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
var mergeTwoLists = function(l1, l2) {
    if (l1 === null) return l2;
    if (l2 === null) return l1;
    
    const head = new ListNode(-1);
    
    let cur = head;
    let node1 = l1;
    let node2 = l2;
    while (node1 && node2) {
        if (node1.val < node2.val) {
            cur = (cur.next = node1);
            node1 = node1.next;
        } else {
            cur = (cur.next = node2);
            node2 = node2.next;
        }
    }
    
    if (node1) cur.next = node1;
    if (node2) cur.next = node2;
    
    return head.next;
    
};

