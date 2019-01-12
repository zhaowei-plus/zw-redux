import { combineReducers } from 'redux';

import { appleReducer } from './appleReducer';
import { orangeReducer } from './orangeReducer';
import { cnodeReducer } from './cnodeReducer';

export default combineReducers({
  apple: appleReducer,
  orange: orangeReducer,
  cnode: cnodeReducer,
});
