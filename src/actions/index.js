import * as Ation from '../constants';

export function addApple(params = {}) {
  return {
    type: Ation.ADD_APPLE,
    payload: {
      ...params,
    },
  }
}
export function eatApple(params = {}) {
  return {
    type: Ation.EAT_APPLE,
    payload: {
      ...params,
    },
  }
}
export function addOrange(params = {}) {
  return {
    type: Ation.ADD_ORANGE,
    payload: {
      ...params,
    },
  }
}
export function eatOrange(params = {}) {
  return {
    type: Ation.EAT_ORANGE,
    payload: {
      ...params,
    },
  }
}