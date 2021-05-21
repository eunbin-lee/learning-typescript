"use strict";
/*
[ Generics ] - 타입이 정해져있지 않을 때 사용

any를 사용하면 type이 any로 지정되지만
Generics를 사용하면 값이 들어왔을 때 타입이 정해져
그 타입을 유지할 수 있음
*/
function merge(a, b) {
    return Object.assign(Object.assign({}, a), b);
}
const merged = merge({ foo: 1 }, { bar: 2 });
//-----------------------------------------------
function wrap(param) {
    return {
        param,
    };
}
const wrapped = wrap(10);
wrapped.param; // type: number;
//= type Items<T, V> = {
//  list: T[];
// value: V;
// }
const items = {
    list: [1, 2, 3],
    value: 'aaa',
};
//-----------------------------------------------
class Queue {
    constructor() {
        this.list = [];
    }
    get length() {
        return this.list.length;
    }
    enqueue(item) {
        this.list.push(item);
    }
    dequeue() {
        return this.list.shift();
    }
}
const queue = new Queue();
queue.enqueue(0);
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
while (queue.length > 0) {
    console.log(queue.dequeue());
}
