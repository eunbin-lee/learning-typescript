class Human {
  public name: string;
  public age: number;
  public gender: string;
  constructor(name: string, age: number, gender: string) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
}

const lynn = new Human('Lynn', 18, 'female');

const sayHi = (person: Human): string => {
  return `Hello ${person.name}, you are ${person.age}, you are a ${person.gender}!`;
};

console.log(sayHi(lynn));

export {};

/* 
interface는 js로 컴파일 되지 않음 → js로 컴파일 시켜주고 싶다면 class를 사용
- public: 밖에서 접근할 수 있는 속성
- private: 밖에서 접근할 수 없는 속성
*/
