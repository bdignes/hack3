import { combineReducers } from 'redux';
import Counter from './counterReducer';
import LoggedIn from './IsLoggedInReducer';

const JoinedReducers = combineReducers({
  count: Counter,
  loggedIn: LoggedIn,
});

export default JoinedReducers;
