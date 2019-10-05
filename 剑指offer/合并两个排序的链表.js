function ListNode(x) {
    this.val = x;
    this.next = null;

}
function append(node1, node2) {


    let last_node;
    let node = node1;
    while (node.next != null) {
        node = node.next;
    }
    node.next = node2;
    return node1;

}
function Merge(pHead1, pHead2) {
    // write code here


    if (pHead1 == null && pHead2 == null) {
        return null;
    }
    let mergedLink = null;
    while (pHead1 !== null && pHead2 !== null) {
        let mix = null;

        if (pHead1.val <= pHead2.val) {
            mix = pHead1.val;
            pHead1 = pHead1.next;
        } else {
            mix = pHead2.val;
            pHead2 = pHead2.next;
        }
        if (mergedLink === null) {
            mergedLink = new ListNode(mix);
        } else {

            mergedLink = append(mergedLink, new ListNode(mix));
            // mergedLink.next = new ListNode(mix)
        }

    }

    let lastLink = pHead1 == null ? pHead2 : pHead1;
    // mergedLink.next = lastLink;
    if (mergedLink == null) {
        return lastLink
    } else {
        mergedLink = append(mergedLink, lastLink)

    }
    return mergedLink;
}

let node1 = new ListNode(1);
let node2 = new ListNode(6);
let node3 = new ListNode(8);
let node4 = new ListNode(4);
let node5 = new ListNode(5);
let node6 = new ListNode(9);
node1.next = node2; node2.next = node3;
node4.next = node5;
node5.next = node6;
console.log(Merge(node1, null))