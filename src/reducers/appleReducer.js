import * as Action from '../constants';
const initialState = {
  apples: [],
}
/**
 * reducer 纯函数，
 * 传入旧state和作用action，从而返回一个信息state
 * */
export const appleReducer = (state = initialState, action) => {
  switch(action.type) {
    case Action.ADD_APPLE: {
      return {
        ...state,
        apples: [...state.apples, action.payload],
      };
    }
    case Action.EAT_APPLE: {
      return {
        ...state,
        apples: state.appCount--,
      }
    }
    default:
      return state;
  }
}