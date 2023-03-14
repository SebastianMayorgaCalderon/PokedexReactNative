import {INCREMENT, DECREMENT} from './types';

interface State {
  count: number;
}

const initialState: State = {
  count: 0,
};

export const pokemonReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {...state, count: state.count + 1};
    case DECREMENT:
      return {...state, count: state.count - 1};
    default:
      return state;
  }
};
