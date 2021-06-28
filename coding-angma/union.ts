// [ Union Types] : 동일한 속성의 타입을 다르게 해서 구분 가능

interface Car {
  name: 'car';
  color: string;
  start(): void;
}

interface Mobile {
  name: 'mobile';
  color: string;
  call(): void;
}

function getGift(gift: Car | Mobile) {
  console.log(gift.color);
  if (gift.name === 'car') {
    gift.start();
  } else {
    gift.call();
  }
}
