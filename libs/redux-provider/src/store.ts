import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './lib/feature/counter.slice'
import loginReducer from './lib/feature/login/login.slice'

export const store = configureStore({
    reducer:{counter:counterReducer, login:loginReducer}
});

export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;
export default store;