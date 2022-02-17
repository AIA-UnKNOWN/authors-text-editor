import { configureStore } from '@reduxjs/toolkit'
import userReducer from './reducers/userSlice';
import notificationReducer from './reducers/notificationSlice';


export default configureStore({
  reducer: {
    user: userReducer,
    notification: notificationReducer
  },
})