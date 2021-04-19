let score1 = 200;
/*
타입스크립트에서는 초기에 설정된 값으로 변수의 타입이 결정됨
score1 = "30"; 과 같이 다른 타입으로 할당 불가

var score; 처럼 값을 설정하지 않고 선언할 경우
타입이 any로 설정되어 어떤 값이든 할당 가능
*/

let score2: number;
/*
변수를 특정한 타입으로 고정하고 싶을 경우
type annotation 설정 가능
*/

const score3: number = 100;
/*
상수로 선언할 경우 초기값을 할당해야 함
(type annotation을 설정하지 않아도 특정한 타입으로 고정됨)
*/
