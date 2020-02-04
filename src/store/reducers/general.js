import { SIMPLE_ACTION } from '../actionTypes';

const INITIAL_STATE = [];

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SIMPLE_ACTION:
      return [
        ...state,
        action.payload.text
      ];
    default:
      return state;
  }
}
