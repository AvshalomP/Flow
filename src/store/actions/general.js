import { SIMPLE_ACTION } from '../actionTypes';

export const sendSimpleAction = (payload) => {
  return {
    type: SIMPLE_ACTION,
    payload
  }
};
