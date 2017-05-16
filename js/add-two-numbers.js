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
    let first = new ListNode(0);
    let curr = first;
    let carry = 0;
    while (l1 || l2){
        n1 = l1 && l1.val;
        n2 = l2 && l2.val;
        
        let sum = n1 + n2 + carry;
        
        if (sum > 9){
            curr.next = new ListNode(sum - 10);
            carry = 1;
        }else{
            curr.next = new ListNode(sum);
            carry = 0;
        }
        curr = curr.next;
        l1 = l1 && l1.next;
        l2 = l2 && l2.next;
    }
    
    if (carry){
        curr.next = new ListNode(carry);
    }
    
    
    return first.next;
};


