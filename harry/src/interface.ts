/* 
TV 라는 타입의 행위(메서드)를 정의
interface에서는 실질적인 구현체가 아닌 메서드, 반환값만 정의
(어떤 interface 사용시 해당 타입의 정의된 행위, 타입들은 필수로 작성해야 함)

- turnOn() : 메서드
- boolean : 반환값
*/

interface TV {
  turnOn(): boolean;
  turnOff(): void;
}

const myTV: TV = {
  turnOn() {
    return true;
  },
  turnOff() {},
};

function tryTurnOn(tv: TV) {
  tv.turnOn();
}
tryTurnOn(myTV);

// ------------------------------------------------------------------------------

/*
행위가 아닌 데이터 타입만 정의하기도 함

- piece? : 필수가 아닌 옵션인 속성임을 의미
*/

interface Cell {
  row: number;
  col: number;
  piece?: Piece;
}

interface Piece {
  move(from: Cell, to: Cell): boolean;
  // 어떤 Cell에서 다른 Cell로 Move한 것에 대한 결과를 boolean 값으로 반환
  // from: Cell, to: Cell : from, to 파라미터를 Cell 타입으로 설정
}

function createBoard() {
  const cells: Cell[] = [];
  for (let row = 0; row < 4; row++) {
    for (let col = 0; col < 3; col++) {
      cells.push({ row, col });
    }
  }
  return cells;
}

const board = createBoard();
board[0].piece = {
  move(from: Cell, to: Cell) {
    return true;
  },
};
