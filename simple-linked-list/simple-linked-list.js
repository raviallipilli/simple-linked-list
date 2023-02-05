//
// This is only a SKELETON file for the 'Simple Linked List' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Element {
  constructor(value, next = null) {
    this._value = value;
    this._next = next;
  }

  get value() {
      return this._value;
  }

  get next() {
      return this._next;
  }
}

export class List {
  constructor(head = null) {
    // Lists with single element
    if (head === null)
    {
      this._head = head;
      this._length = 0;
    }
    // Lists with multiple elements
    else
    {
      this._head = null;
      this._length = 0;
      for(let i = 0; i < head.length; i++)
      {
        var newHead = new Element(head[i]);
        newHead._next = this._head; 
        this._head = newHead;
        this._length++;
      }
    }
  }

  add(nextValue) {
    var current = nextValue; // input nextvalue = 4 the value will be 4, next = null
    current._next = this._head; // head = null
    this._head = current; // head value = 4 next = null
    this._length++; // if we add new element 2 then the element 4 will be replaced by 2 with next = null
    return this;
  }

  get length() {
    var current = this._head;
    let size = 0;
    while (current != null)
    {
        size++;
        current = current.next;
    }
    return size;
  }

  get head() {
    return this._head;
  }

  toArray() {
    let current = this._head;
    let convertedArray = [];
    let i = this._length;
    // Lists with single element of an object
    if (i === 0) 
    {
      // push the element into an empty array
      convertedArray.push(current.value);
      return convertedArray;
    }
    // Lists with multiple elements object
    else 
    {
      while (i > 0) 
      {
        // at this point the list is coming as 1->2->3
        // after pushing each element the first element out is into the stack is ->3 followed by 3->2 then 3->2->1
        // adding elements in LIFO - head value is 3
        // before convertedArray is []
        convertedArray.push(current.value); // so the array will look like [], [3], [3,2], [3,2,1] with head value=3 next=2, head value=2 next=1, head value=1 next=null
        current = current.next;
        // after convertedArray will be [3,2,1] but if we add reverse function to this array then the array will be [1,2,3] 
        i--;
      }
      return convertedArray;
    }
  }

  reverse() {
    let reversed = new List();
    reversed._length = 0;
    reversed._head = this._head;
    let next = this._head;
    var current = this._head;
    let i = this._length;
    // this is a rare case with single element in a list,therefore return head input = 1 will return value = 1
    if(i === 0) return this;
    // Lists with multiple elements
    else 
    {
      while (i > 0) 
      {
        // if the input = [1,2,3]
        // the list the list will be ->1 then ->2->1 then ->3->2->1
        next = current.next; // head.value first value = 3 next = 2 reversed.length = 0 head.length i = 3
        current._next = reversed._head; // head.next.value value = 2 next = 1 reversed.length = 1 head.length i = 2
        reversed._head = current; // head.next.next.value value = 1 next = null reversed.length = 2 head.length i = 1
        current = next; // loop ends as i = 0 value = next = null 
        reversed._length++;
        i--;
      }
      return reversed;
    }
  }
}
