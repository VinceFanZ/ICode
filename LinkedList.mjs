function ListNode(val) {
  this.val = val
  this.next = null
}

function LinkedList() {
  this.head = null
  this.length = 0
}

LinkedList.prototype.append = function (element) {
  const node = new ListNode(element)

  if (!this.head) {
    this.head = node
  } else {
    let current = this.head
    while (current.next) {
      current = current.next
    }
    current.next = node
  }
  this.length++
}

export { ListNode, LinkedList }
