import { configureStore } from '@reduxjs/toolkit'
import userReducer from './reducers/userSlice';
import notificationReducer from './reducers/notificationSlice';
import collectionsSlice from './reducers/collectionsSlice';

export default configureStore({
  reducer: {
    user: userReducer,
    notification: notificationReducer,
    collections: collectionsSlice,
  },
})