const name = 'Nicolas',
  age = 24,
  gender = 'male';

const sayHi = (name, age, gender?) => {
  console.log(`Hello ${name}, you are ${age}, you are a ${gender}`);
};

sayHi(name, age);

export {};

// gender? : gender 파라미터는 옵션임을 의미
