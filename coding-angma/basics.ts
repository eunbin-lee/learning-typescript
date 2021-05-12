// [ 기본 타입 ]
let car: string = 'bmw';
car = 'benz';

let age: number = 30;
let isAdult: boolean = true;
let a: number[] = [1, 2, 3];
let a2: Array<number> = [1, 2, 3];

let week1: string[] = ['mon', 'tue', 'wed'];
let week2: Array<string> = ['mon', 'tue', 'wed'];

// ---------------------------------------------------------

// [ 튜플(Tuple) ] - 인덱스 간의 타입이 다를 때 사용 가능
let b: [string, number];
b = ['b', 1];
// b[1].toLowerCase(); // 에러 발생

// ---------------------------------------------------------

// [ void, never ]
// - void: 함수에서 아무 것도 반환하지 않을 때 사용 가능
function sayHello(): void {
  console.log('hello');
}

// - never: 에러를 반환하거나 무한루프의 함수로 사용 가능
function showError(): never {
  throw new Error();
}
function infLoop() {
  while (true) {
    // do something...
  }
}

// ---------------------------------------------------------

// [ enum ] - 비슷한 값들끼리 묶어줄 때 사용
enum Os {
  Window = 3,
  Ios = 10,
  Android = 'and',
}
console.log(Os[10]); // "Ios"
console.log(Os['Ios']); // 10

let myOs: Os;
myOs = Os.Window;

// ---------------------------------------------------------

// [ null, undefined ]
let c: null = null;
let d: undefined = undefined;
