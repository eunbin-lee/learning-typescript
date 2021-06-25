// [ 함수 ]

// [ return type ]

function add(num1: number, num2: number): number {
  return num1 + num2;
}

function isAdult(age: number): boolean {
  return age > 19;
}

// ---------------------------------------------------------

// [ parameter type ]

function hello1(name?: string) {
  return `Hello, ${name || 'world'}`;
}

// 매개변수의 초기값 설정
function hello2(name = 'world') {
  return `Hello, ${name}`;
}

// 선택적 매개변수는 필수 매개변수 뒤에 입력해야 함
// 혹은 age: number | undefined, name: string으로 입력 가능
// (age?: number, name: string 라고 입력 시 에러 발생)
function hello3(name: string, age?: number): string {
  if (age !== undefined) {
    return `Hello, ${name}. You are ${age}.`;
  } else {
    return `Hello, ${name}`;
  }
}

// ---------------------------------------------------------

// [ array parameter ]

function add2(...nums: number[]) {
  return nums.reduce((result, num) => result + num, 0);
}

add2(1, 2, 3); // 6
add2(1, 2, 3, 4, 5, 6, 7, 8, 9, 10); // 55

// ---------------------------------------------------------

// [ this parameter ]

interface User {
  name: string;
}

const Sam: User = { name: 'Sam' };

function showName(this: User, age: number, gender: 'm' | 'f') {
  console.log(this.name, age, gender);
}

const a = showName.bind(Sam);
a(30, 'm'); // this 매개변수 다음인 age, gender 순으로 30, 'm'이 전달됨

// ---------------------------------------------------------

// 매개변수의 타입이나 갯수에 따라 다르게 동작해야 한다면 오버로드를 사용

interface Member {
  name: string;
  age: number;
}

function join(name: string, age: string): string;
function join(name: string, age: number): Member;
function join(name: string, age: number | string): Member | string {
  if (typeof age === 'number') {
    return {
      name,
      age,
    };
  } else {
    return '나이는 숫자로 입력해주세요.';
  }
}

const sam: Member = join('Sam', 30);
const jane: string = join('Jane', '30');
