import { configureStore } from '@reduxjs/toolkit'
import couterReducer from "./reducers/counter/counterSlice"



export default configureStore({
    reducer: couterReducer,
  })


