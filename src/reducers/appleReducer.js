import * as Action from '../constants';

export const appleInitState = {
  counter: 0,
  weight: [],
}

/**
 * reducer 纯函数，
 * 传入旧 state和作用action，从而返回一个信息state
 * */
export const appleReducer = (state = appleInitState, action) => {
  switch(action.type) {
    case Action.ADD_APPLE: {
      return {
        counter: state.counter + 1,
        weight: [...state.weight, action.payload.weight],
      };
    }
    case Action.EAT_APPLE: {
      const { weight } = state;
      weight.splice(action.payload.index, 1)
      return {
        counter: state.counter - 1,
        weight,
      }
    }
    default:
      return state;
  }
}