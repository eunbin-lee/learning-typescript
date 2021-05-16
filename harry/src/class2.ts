interface Person {
  name: string;
  say(message: string): void;
}
interface Programmer {
  writeCode(requirment: string): string;
}

// 추상 클래스: 인스턴스 생성 불가
abstract class Korean implements Person {
  public abstract jumin: number;
  constructor(public name: string) {}
  say(msg: string): void {
    console.log(msg);
  }
  abstract loveKimchi(): void;
}

// abstract class에서 구현하지 않은 속성들(jumin, loveKimchi())을 KoreamProgrammer에서 구현해야 함
class KoreanProgrammer extends Korean implements Programmer {
  constructor(public name: string, public jumin: number) {
    // 상속 받을 시 부모인 Korean의 생성자 함수를 호출해줘야 함
    super(name);
  }
  say(message: string): void {
    console.log(message);
  }
  writeCode(requirment: string): string {
    return requirment + '.....';
  }
  loveKimchi(): void {
    console.log('love kimchi');
  }
}

const jay = new KoreanProgrammer('jay', 212121);
// const jay2 = new Korean('jay', 212121); // 생성 불가
