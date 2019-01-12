import * as Action from "../constants";

export function addOrange(params = {}) {
  return {
    type: Action.ADD_ORANGE,
    payload: {
      ...params,
    },
  }
}
export function eatOrange(params = {}) {
  return {
    type: Action.EAT_ORANGET,
    payload: {
      ...params,
    },
  }
}