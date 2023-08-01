class List {
  constructor(val) {
    this.head = this.createNode(val);
  }

  getHead() {
    return this.head;
  }
  createNode(val = null, next = null) {
    return {
      val,
      next,
    };
  }
  insertNode(head, node, val) {
    let curr = head;
    while (curr != null && curr.val != null) {
      if (curr.val === node) {
        const next = curr.next;
        curr.next = this.createNode(val);
        curr.next.next = next;
        curr = curr.next;
        break;
      } else {
        curr = curr.next;
      }
    }
  }
  printNode() {
    let curr = this.head;
    let printArr = [];
    while (curr != null) {
      printArr.push(curr.val);
      curr = curr.next;
    }
    console.log(printArr.join(" "));
  }
  deleteNodeFn(deleteNode) {
    let curr = this.head;
    let pre = this.createNode(null, curr);
    while (curr.next) {
      if (pre.val == null && curr.val === deleteNode) {
        this.head = curr.next;
        break;
      }
      pre = curr;
      curr = curr.next;
      if (curr.val === deleteNode) {
        if (curr.val == null) {
          pre.next = null;
        } else {
          pre.next = curr.next;
        }

        break;
      }
    }
  }
}
