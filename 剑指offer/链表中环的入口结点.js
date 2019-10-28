function ListNode(x) {
    this.val = x;
    this.next = null;
}
function EntryNodeOfLoop(pHead) {
    let obj = {};
    let p = pHead;
    while (p) {
        if (obj[p.val]) {
            return p
        } else {
            obj[p.val] = 1
        }
        p = p.next
    }
    return null
    // write code here
}
let node1 = new ListNode(1);
let node2 = new ListNode(2);
let node3 = new ListNode(3);
let node4 = new ListNode(4);
let node5 = new ListNode(5);
node1.next = node2; node2.next = node3; node3.next = node4; node4.next = node5;
console.log(EntryNodeOfLoop(node1))