import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import * as Actions from './actions';

export default (history) =>
  combineReducers({
    router: connectRouter(history),
  });
