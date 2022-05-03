import { configureStore } from '@reduxjs/toolkit';
import commentsReducer from './features/comments/commentsSlice';
import homeReducer from './features/home/homeSlice';
import postReducer from './features/post/postSlice';
import searchReducer from './features/search/searchSlice';
import subredditListReducer from './features/subredditList/subredditListSlice';

export default configureStore({
    reducer: {
      comments: commentsReducer,
      home: homeReducer,
      post: postReducer,
      subredditList: subredditListReducer,
      search: searchReducer
    }
  });   