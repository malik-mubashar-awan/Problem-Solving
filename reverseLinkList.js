
  function ListNode(val, next) {
      this.val = (val===undefined ? 0 : val)
      this.next = (next===undefined ? null : next)
  }

  var reverseList = function(head) {
    if (!head || !head.next) return head;

    let newHead = reverseList(head.next);
    head.next.next = head;
    head.next = null;

    return newHead;
};

// var reverseList = function(head) {
//     if (!head || !head.next) return head;
    
//     let prev = null;
//     let current = head;
    
//     while (current) {
//         let nextTemp = current.next;
//         current.next = prev;
//         prev = current;
//         current = nextTemp;
//     }
    
//     return prev;
// };
function createLinkedList(arr) {
    let dummy = new ListNode(0);
    let current = dummy;
    for (let val of arr) {
        current.next = new ListNode(val);
        current = current.next;
    }
    return dummy.next;
}
let head = createLinkedList([1, 2, 3, 4]);
var result = reverseList(head);
console.log(result);

