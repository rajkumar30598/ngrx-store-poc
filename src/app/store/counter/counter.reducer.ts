import { createReducer, on } from '@ngrx/store';
import { increment, decrement, reset } from '../counter/counter.actions';

export const initialState = { value: 0 };

export const counterReducer = createReducer(
  initialState,
  on(increment, (state) => {
    return {
      ...state,
      value: state.value + 1,
    };
  }),
  on(decrement, (state) => {
    return {
      ...state,
      value: state.value - 1,
    };
  }),
  on(reset, () => {
    return { value: 0 };
  })
);
