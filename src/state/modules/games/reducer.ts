import {SET_USERNAME} from './types';

interface State {
  username: string;
}

const initialState: State = {
  username: 'asdasdadsß',
};

export const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERNAME:
      return {...state, username: action.payload};
    default:
      return state;
  }
};
