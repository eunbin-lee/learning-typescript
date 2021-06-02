import { AsyncActionCreatorBuilder, PayloadAction } from 'typesafe-actions';
import { call, put } from 'redux-saga/effects';

type PromiseCreatorFunction<P, T> =
  | ((payload: P) => Promise<T>)
  | (() => Promise<T>);

/* Type guard */
function isPayloadAction(action: any): action is PayloadAction<string, any> {
  return action.payload !== undefined;
}

export default function createAsyncSaga<T1, P1, T2, P2, T3, P3>(
  asyncActionCreator: AsyncActionCreatorBuilder<
    [T1, [P1, undefined]], // P1: request의 action payload, promiseCreator의 파라미터((payload: P) => Promise<T>)
    [T2, [P2, undefined]], // P2: success의 action payload, promiseCreator의 결과값(() => Promise<T>)
    [T3, [P3, undefined]]
  >,
  promiseCreator: PromiseCreatorFunction<P1, P2>,
) {
  return function* saga(action: ReturnType<typeof asyncActionCreator.request>) {
    try {
      const result: P2 = isPayloadAction(action)
        ? yield call(promiseCreator, action.payload)
        : yield call(promiseCreator);
      yield put(asyncActionCreator.success(result));
    } catch (e) {
      yield put(asyncActionCreator.failure(e));
    }
  };
}
