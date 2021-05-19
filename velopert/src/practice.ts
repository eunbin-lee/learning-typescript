// [ Interface ] - 클래스 또는 객체를 위한 타입을 지정할 때 사용
interface Shape {
  getArea(): number;
}
// implements: Circle은 Shape이 가진 조건들을 충족시킴을 의미
class Circle implements Shape {
  radius: number;

  constructor(radius: number) {
    this.radius = radius;
  }

  getArea() {
    return this.radius * this.radius * Math.PI;
  }
}

class Rectangle implements Shape {
  constructor(public width: number, private height: number) {}

  getArea() {
    return this.width * this.height;
  }
}

const circle: Circle = new Circle(5);
const rectangle = new Rectangle(2, 5);
const shapes: Shape[] = [circle, rectangle];

shapes.forEach((shape) => {
  console.log(shape.getArea());
});

// [ Type Alias ]
/*
interface Person  {
  name: string;
  age?: number;
}
*/
type Person = {
  name: string;
  age?: number;
};

// extends (= Person &): Developert는 Person을 상속받음
/*
interface Developer extends Person {
  skills: string[];
}
*/
type Developer = Person & {
  skills: string[];
};

const person: Person = {
  name: '김사람',
  age: 20,
};

const expert: Developer = {
  name: '김개발',
  skills: ['javascript', 'react', 'typescript'],
};

type People1 = Person[];
const people: People1 = [person, expert];

type Color = 'red' | 'orange' | 'yellow';
const color: Color = 'orange';

/*
어떤 라이브러리를 위한 타입을 설정하는 경우에는 interface만 사용하는 것을 권장
interface와 type alias 중 하나만 사용하는 것을 권장
*/
