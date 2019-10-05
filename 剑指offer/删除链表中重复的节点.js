function ListNode(x) {
    this.val = x;
    this.next = null;
}

function deleteDuplication(pHead) {
    // write code here
    if (pHead === null || pHead.next === null) {
        return pHead;
    }
    var curr_node = pHead;
    if (pHead.val === curr_node.next.val) {
        curr_node = curr_node.next.next;
        while (curr_node !== null && curr_node.val === pHead.val) {
            curr_node = curr_node.next;
        }
        return deleteDuplication(curr_node)
    } else {
        curr_node = pHead.next;
        pHead.next = deleteDuplication(curr_node);
        return pHead;
    }


}
let a = new ListNode(1)
let b = new ListNode(1)
let c = new ListNode(3)
let d = new ListNode(3)
let e = new ListNode(4)
let f = new ListNode(4)
let g = new ListNode(5)
a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;
g.next = g
let res = deleteDuplication(a)
console.log(res)
    // print(res)

function print(pHead) {
    let arr = []
    while (pHead != null) {
        arr.push(pHead.val)
        pHead = pHead.next
    }
    console.log(arr)
}
//console.log(res)
module.exports = {
    deleteDuplication: deleteDuplication
};