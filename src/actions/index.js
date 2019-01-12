import { addApple, eatApple } from './appleActions';
import { addOrange, eatOrange } from './orangeActions'
import { initTopics, getTopics, getTopic, initTopicID } from './cNodeActions';

// 导出 Action Creater 方法，实际上可以不需要
export default {
  addApple,
  eatApple,
  addOrange,
  eatOrange,
  initTopics,
  getTopics,
  getTopic,
  initTopicID,
}