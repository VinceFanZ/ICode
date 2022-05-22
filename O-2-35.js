/**
 * 35. 复杂链表的复制
 */

// Definition for a Node.
function Node(val, next, random) {
  this.val = val
  this.next = next
  this.random = random
}

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function (head) {
  return copy(head)
}

function copy(head, cacheNode = new Map()) {
  if (!head) {
    return null
  }
  if (!cacheNode.has(head)) {
    cacheNode.set(head, {
      val: head.val
    })
    Object.assign(cacheNode.get(head), {
      next: copy(head.next, cacheNode),
      random: copy(head.random, cacheNode)
    })
  }
  return cacheNode.get(head)
}
