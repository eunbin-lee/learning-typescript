// [ class ]

/* 
접근 제한자 (Access modifier) - public, private(#), protected
- public : 자식 클래스, 클래스 인스턴스 모두 접근 가능
- protected : 자식 클래스에서 접근 가능
- private : 해당 클래스 내부에서만 접근 가능
*/

class Car {
  name: string = 'car';
  color: string; // 멤버변수 (또는 public이나 readonly로 설정)
  static wheels = 4;
  constructor(color: string) {
    this.color = color;
  }
  start() {
    console.log('start');
    console.log(this.name);
    console.log(Car.wheels);
  }
}

class Bmw extends Car {
  constructor(color: string) {
    super(color);
  }
  showName() {
    console.log(super.name);
  }
}

const z4 = new Bmw('black');
console.log(z4.name);
console.log(Car.wheels);

// 추상 class : property나 method의 이름만 선언해주고 구체적인 기능은 상속 받는 쪽에서 구현 (상속을 통해서만 사용 가능)
abstract class Car2 {
  color: string;
  constructor(color: string) {
    this.color = color;
  }
  start() {
    console.log('start');
  }
  abstract doSomething(): void;
}

// const car2 = new Car2('red');

class Audi extends Car2 {
  constructor(color: string) {
    super(color);
  }
  doSomething() {
    alert(3);
  }
}
