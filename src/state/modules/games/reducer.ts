import {SET_USERNAME} from './types';

export interface State {
  username: string;
}

const initialState: State = {
  username: 'asdasdadsß',
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERNAME:
      return {...state, username: action.payload};
    default:
      return state;
  }
};

export default reducer;
