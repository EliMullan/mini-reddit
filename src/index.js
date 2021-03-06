import { configureStore, combineReducers } from '@reduxjs/toolkit';
import redditReducer from './store/redditSlice';
import subRedditReducer from './store/subRedditSlice';

export default configureStore({
  reducer: combineReducers({
    reddit: redditReducer,
    subreddits: subRedditReducer,
  }),
});
