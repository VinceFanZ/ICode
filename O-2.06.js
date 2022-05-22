/**
 *  06. 从尾到头打印链表
 */

/**
 * Definition for singly-linked list.
 */
// function ListNode(val) {
//   this.val = val
//   this.next = null
// }

import { LinkedList } from './LinkedList.mjs'

/**
 * @param {ListNode} head
 * @return {number[]}
 */
var reversePrint = function (head) {
  const res = []
  let current = head
  while (current && current.next) {
    res.unshift(current.val)
    current = current.next
  }
  current && res.unshift(current.val)

  return res
}

const link = new LinkedList()
link.append(5)
link.append(3)

console.log(link)
