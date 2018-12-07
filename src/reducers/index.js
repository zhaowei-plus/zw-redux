import { combineReducers } from 'redux';

import { appleReducer } from './appleReducer';
import { orangeReducer } from './orangeReducer';

export default combineReducers({
  apple: appleReducer,
  orange: orangeReducer,
});
