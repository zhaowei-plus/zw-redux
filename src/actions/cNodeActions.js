import $ from "jquery";
import * as Actions from '../constants';

import { topics, topic } from '../services';

export const initTopics = (topics) => ({
  type: Actions.INIT_TOPICS,
  payload: {
    topics,
  }
});

export const initTopic = (topic) => ({
  type: Actions.INIT_TOPIC,
  payload: {
    topic,
  }
});

export const initTopicID = (id) => ({
  type: Actions.INIT_TOPICID,
  payload: {
    id,
  }
})

export function getTopics(params) {
  return (dispatch, getState) => {
    const result = topics(params);
    result.then((topics) => {
      const action = initTopics(topics);
      dispatch(action);
  })
  }
}

export function getTopic(params) {
  return (dispatch, getState) => {
    topic(params)
      .then(topic => {
        const action = initTopic(topic);
        dispatch(action);
      });
  }
}