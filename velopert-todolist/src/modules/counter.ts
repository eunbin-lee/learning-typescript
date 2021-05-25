const INCREASE = 'counter/INCREASE' as const;
const DECREASE = 'counter/DECREASE' as const;
const INCREASE_BY = 'counter/INCREASE_BY' as const;
// as const: 타입을 string이 아닌 'counter/INCREASE'로 인식하도록 설정

export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });
export const increaseBy = (diff: number) => ({
  type: INCREASE_BY,
  payload: diff,
});

type CounterState = {
  count: number;
};

const initialState: CounterState = {
  count: 0,
};

type CounterAction =
  | ReturnType<typeof increase>
  | ReturnType<typeof decrease>
  | ReturnType<typeof increaseBy>;
// ReturnType: 함수의 결과물에 대한 타입을 받아옴

function counter(
  state: CounterState = initialState,
  action: CounterAction,
): CounterState {
  switch (action.type) {
    case 'counter/INCREASE':
      return { count: state.count + 1 };
    case 'counter/DECREASE':
      return { count: state.count - 1 };
    case 'counter/INCREASE_BY':
      return { count: state.count + action.payload };
    default:
      return state;
  }
}

export default counter;
