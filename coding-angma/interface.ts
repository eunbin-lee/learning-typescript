// [ interface ] - property를 정의해서 객체를 표현하고자 할 때 사용 가능

// 예시 1
type Score = 'A' | 'B' | 'C' | 'D';

interface User {
  name: string;
  age: number;
  gender?: string; // optional property
  readonly birthYear: number; // 읽기 전용 (수정 불가)
  [grade: number]: Score; // Score에 있는 값만 입력 가능
}

let user: User = {
  name: 'xx',
  age: 30,
  birthYear: 2000,
  1: 'A',
  2: 'B',
};

user.age = 10;

console.log(user.age); // 10

// 예시 2
interface Add {
  (num1: number, num2: number): number;
}

const add: Add = function (x, y) {
  return x + y;
};

add(10, 20); // 30

// 예시 3
interface IsAdult {
  (age: number): boolean;
}

const abc: IsAdult = (age) => {
  return age > 19;
};

abc(33); // true

// ---------------------------------------------------------

// [ implements ] - class를 정의할 때 사용 가능

interface Car {
  color: string;
  wheels: number;
  start(): void;
}

class Bmw implements Car {
  color;
  wheels = 4;

  constructor(c: string) {
    this.color = c;
  }

  start() {
    console.log('go..');
  }
}

const myCar = new Bmw('green');
console.log(myCar); // Bmw: { 'wheels': 4, 'color': 'green' }
myCar.start(); // 'go..'

// ---------------------------------------------------------

// [ extends ] - interface를 확장할 때 사용 가능

// Car에 존재하는 속성들을 상속 받음
interface Benz extends Car {
  door: number;
  stop(): void;
}

const benz: Benz = {
  color: 'black',
  wheels: 4,
  start() {
    console.log('go!');
  },
  door: 5,
  stop() {
    console.log('stop');
  },
};

interface Toy {
  name: string;
}

// 2개 이상 확장 가능
interface Toycar extends Car, Toy {
  price: number;
}
