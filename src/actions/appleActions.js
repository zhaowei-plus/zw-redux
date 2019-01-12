import * as Action from "../constants";
import $ from 'jquery';

export function addApple(params = {}) {
  return {
    type: Action.ADD_APPLE,
    payload: {
      ...params,
    },
  }
}
export function eatApple(params = {}) {
  return {
    type: Action.EAT_APPLE,
    payload: {
      ...params,
    },
  }
}

export function getTopics() {
  return (dispatch) => {
    $.get('/api/v1/topics', function(response) {
      console.log('response:', response);

      // 获取数据之后，调用dispatch方法，转发数据，保存到state

    });
  }
}