import $ from 'jquery';

const cnode = {
  tpoics: 'https://cnodejs.org/api/v1/topics',
  topic: 'https://cnodejs.org/api/v1/topic/:id',
}

export const topics = (params = {}) => {
  return new Promise((resolve, reject) => {
    $.get(cnode.tpoics,
      params,
      (response) => {
        resolve(response);
      })
  })
}

export const topic = ({id}) => {
  const url = cnode.topic.replace(':id', id);
  return new Promise((resolve, reject) => {
    $.get(url, response => {
      resolve(response);
    })
  });
}

