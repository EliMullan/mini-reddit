import { configureStore } from '@reduxjs/toolkit';

import subredditListReducer from './features/subreddits/subredditListSlice';

export default configureStore({
    reducer: {
      
      subredditList: subredditListReducer,
    }
  });   