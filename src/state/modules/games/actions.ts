import {SET_USERNAME} from './types';

export const setUsername = (username: string) => ({
  type: SET_USERNAME,
  payload: username,
});
