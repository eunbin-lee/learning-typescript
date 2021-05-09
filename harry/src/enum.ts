// enum: 열거형, 상수들의 집합을 정리할 때 사용 (ex. 회원의 등급)

enum StarbucksGrade {
  // 새로운 등급이 추가될 경우 key값이 달라지므로 초기의 key값을 지정해주는 것이 좋음
  WELCOME = 'WELCOME',
  DDDD = 3,
  GREEN = 1,
  GOLD = 2,
}

function getDiscount(v: StarbucksGrade): number {
  switch (v) {
    case StarbucksGrade.WELCOME:
      return 0;
    case StarbucksGrade.GREEN:
      return 5;
    case StarbucksGrade.GOLD:
      return 10;
  }
}

console.log(getDiscount(StarbucksGrade.GREEN)); // 5
console.log(StarbucksGrade.GREEN); // 1 (key값)
console.log(StarbucksGrade['GOLD']); // 2
console.log(StarbucksGrade[0]); // WELCOME
