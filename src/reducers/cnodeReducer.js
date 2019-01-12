
export const cnodeInitState = {
  topics: [],
  id: '',
  topic: {},
}

/**
 * reducer 纯函数，
 * 传入旧 state和作用action，从而返回一个信息state
 * */
export const cnodeReducer = (state = cnodeInitState, { type, payload }) => {
  console.log('cnodeReducer:', type);
  switch(type) {
    case 'topics': {
      return {
        ...state,
        topics: payload.topics,
      }
    }
    case 'topicId': {
      return {
        ...state,
        id: payload.id,
      }
    }
    case 'topic': {
      return {
        ...state,
        topic: payload.topic,
      }
    }
    default: {
      return state;
    }
  }
}