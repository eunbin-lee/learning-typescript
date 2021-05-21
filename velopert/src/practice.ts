/*
[ Generics ] - 타입이 정해져있지 않을 때 사용

any를 사용하면 type이 any로 지정되지만
Generics를 사용하면 값이 들어왔을 때 타입이 정해져
그 타입을 유지할 수 있음
*/

function merge<T1, T2>(a: T1, b: T2) {
  return {
    ...a,
    ...b,
  };
}
const merged = merge({ foo: 1 }, { bar: 2 });

//-----------------------------------------------

function wrap<T>(param: T) {
  return {
    param,
  };
}
const wrapped = wrap(10);
wrapped.param; // type: number;

//-----------------------------------------------

interface Items<T, V> {
  list: T[];
  value: V;
}
//= type Items<T, V> = {
//  list: T[];
// value: V;
// }
const items: Items<number, string> = {
  list: [1, 2, 3],
  value: 'aaa',
};

//-----------------------------------------------

class Queue<T> {
  list: T[] = [];

  get length() {
    return this.list.length;
  }

  enqueue(item: T) {
    this.list.push(item);
  }

  dequeue() {
    return this.list.shift();
  }
}
const queue = new Queue<number>();
queue.enqueue(0);
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);

while (queue.length > 0) {
  console.log(queue.dequeue());
}
