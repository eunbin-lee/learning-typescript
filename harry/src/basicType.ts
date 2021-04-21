let numValue: number;
let stringValue: string;
let booleanValue: boolean;
let undefinedValue: undefined; // 최하위타입
let nullValue: null; // 최하위타입
let objValue: object;
let symbolValue: symbol;
let anyValue: any; // 최상위타입

/*
numValue = 3;
stringValue = 'hello';
stringValue = `
    hello ${1 + 1}
`;
booleanValue = true;
undefinedValue = null;
numValue = null;
numValue = undefined;

anyValue = 1;
anyValue = '3';
anyValue = null;
anyValue = {};

objValue = { name: 'Tom' };
objValue = {};
objValue = new String('hello');

symbolValue = Symbol(); // 유니크한 값을 생성
*/

let nameList: string[];
nameList = ['1', '3'];
nameList.push('hello');

let user: { name: string; score: number };
user = {
  name: 'jay',
  score: 30,
};

let tuple1: [number, string];
let tuple2: [number, number, number];
tuple1 = [1, '2'];
tuple2 = [1, 2, 3];
