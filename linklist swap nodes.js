function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
}

function createLinkedList(arr) {
    let dummy = new ListNode(0);
    let current = dummy;
    for (let val of arr) {
        current.next = new ListNode(val);
        current = current.next;
    }
    return dummy.next;
}


var swapPairs = function(head) {
    if (!head || !head.next) return head;

    let first = head;
    let second = head.next;

    first.next = swapPairs(second.next);
    second.next = first;

    return second;
};

let head = createLinkedList([1, 2, 3, 4]);

let result = swapPairs(head);
console.log(result);

