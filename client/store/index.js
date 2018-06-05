import {
  createStore,
  applyMiddleware,
  combineReducers
} from 'redux';
import createLogger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import channels from './channels';
import currentChannel from './currentChannel';
import messages from './messages';
import name from './name';
import newChannelEntry from './newChannelEntry';
import newMessageEntry from './newMessageEntry';

const reducer = combineReducers({
  channels,
  currentChannel,
  messages,
  name,
  newChannelEntry,
  newMessageEntry
});

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(
    thunkMiddleware,
    createLogger()
  ))
);

export default store;

// export action creators
export * from './channels';
export * from './currentChannel';
export * from './messages';
export * from './name';
export * from './newChannelEntry';
export * from './newMessageEntry';
