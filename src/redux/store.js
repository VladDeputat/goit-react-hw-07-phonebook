import { contactsReducer } from './reducers';
import { applyMiddleware, combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';

// const loggerMiddleware = store => next => action => {
//   console.group(action.type);
//   console.info('dispatching', action);
//   console.groupEnd(action.type);

//   return next(action);
// };

// const enhancer = applyMiddleware(loggerMiddleware);

const store = configureStore({
  reducer: combineReducers({ contacts: contactsReducer }),
  // loggerMiddleware,
  // enhancer,
});

export default store;
