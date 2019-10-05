function FindKthToTail(head, k) {
    // write code here
    if (head == null || head.next == null) {
        return head;
    }
    // 1 2 3 4 5 ,5
    let curr_node = head;
    let kCount = k;
    while (kCount > 0) {
        if (curr_node == null) {
            break;
        }
        curr_node = curr_node.next;
        kCount--;
    }
    if (kCount != 0) {
        return null;
    } else {
        while (curr_node) {
            curr_node = curr_node.next;
            head = head.next;
        }
    }
    return head
}
function ListNode(x) {
    this.val = x;
    this.next = null;
}
let node1 = new ListNode(1);
let node2 = new ListNode(2);
let node3 = new ListNode(3);
let node4 = new ListNode(4);
let node5 = new ListNode(5);
let node6 = new ListNode(6);
node1.next = node2; node2.next = node3; node3.next = node4; node4.next = node5;
// node5.next = node6;
console.log(FindKthToTail(node1, 5))