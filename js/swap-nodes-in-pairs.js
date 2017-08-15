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
    if (head === null || head.next === null) return head;
    
    const newHead = head.next;
    
    let before = new ListNode(0);
    let node1 = head;
    let node2 = head.next;
    while (node2) {
        const next = node2.next;
        before.next = node2;
        node2.next = node1;
        node1.next = next;
        
        before = node1;
        node1 = before.next;
        node2 = node1 ? node1.next : null;
    }
    
    return newHead;
};

