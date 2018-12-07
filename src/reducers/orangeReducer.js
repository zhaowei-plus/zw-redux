import * as Action from '../constants';
const initialState = {
  oranges: [],
}
/**
 * reducer 纯函数，
 * 传入旧state和作用action，从而返回一个信息state
 * */
export const orangeReducer = (state = [], action) => {
  switch(action.type) {
    case Action.ADD_ORANGE: {
      return {
        ...state,
        apples: action.apples,
      };
    }
    case Action.EAT_ORANGE: {
      return {
        ...state,
        apples: action.apples,
      }
    }
    default:
      return state;
  }
}