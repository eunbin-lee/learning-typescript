let count = 0;
count += 1;
// count = '문자열';

const message: string = 'hello world';
const done: boolean = false;

const numbers: number[] = [1, 2, 3];
const messages: string[] = ['hello', 'world'];
// messages.push(1);

let mightBeUndefined: string | undefined = undefined;
let nullableNumber: number | null = null;

let color: 'red' | 'orange' | 'yellow' = 'red';
color = 'yellow';
// color = 'green';

function sum(x: number, y: number): number {
  return x + y;
}
const result = sum(1, 2);

function sumArray(numbers: number[]): number {
  return numbers.reduce((acc, cur) => acc + cur, 0);
}
const total = sumArray([1, 2, 3, 4, 5]);
console.log(total);

function returnNothing(): void {
  console.log('어쩌고저쩌고');
}

function returnStringOrNumber(): string | number {
  return 4;
}
