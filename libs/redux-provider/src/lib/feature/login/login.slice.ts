import qs from 'qs';
import { ILogin } from '@mintit/model-spec';
import { RootState } from '../../../store';
import {
  createAsyncThunk,
  createEntityAdapter,
  createSelector,
  createSlice,
  EntityState,
  PayloadAction
} from '@reduxjs/toolkit';
import  client from '../../net'
import { setAutoFreeze } from 'immer';

export const LOGIN_FEATURE_KEY = 'login';


export interface LoginState extends EntityState<ILogin> {
  loadingStatus: 'not loaded' | 'loading' | 'loaded' | 'error';
  error: string|null|undefined;
  loginEntitity: ILogin|null|undefined;
}

export const loginAdapter = createEntityAdapter<ILogin>();

/**
 * Export an effect using createAsyncThunk from
 * the Redux Toolkit: https://redux-toolkit.js.org/api/createAsyncThunk
 *
 * e.g.
 * ```
 * import React, { useEffect } from 'react';
 * import { useDispatch } from 'react-redux';
 *
 * // ...
 *
 * const dispatch = useDispatch();
 * useEffect(() => {
 *   dispatch(loginApi())
 * }, [dispatch]);
 * ```
 */
export const loginApi = createAsyncThunk(
  'login/fetchStatus',
 async (req:ILogin, thunkAPI) => {
   const d = {userName: req.userName, password: req.password}
   console.log(qs.stringify(d))

    const resp = await client.get('/login', { params: d })
     console.log('..........',resp) 
    return resp.data;
  }
);

export const initialLoginState: LoginState = loginAdapter.getInitialState({
  loadingStatus: 'not loaded',
  error: null,
  loginEntitity: {
    isLoggedIn: false,
    userName: '',
    password: '',
    token: '',
    tokenExpiration: '',
    status: '',
    err: '',
  },

});

export const loginSlice = createSlice({
  name: LOGIN_FEATURE_KEY,
  initialState: initialLoginState,
  reducers: {
    // ...
  },
  extraReducers: builder => {
    builder
      .addCase(loginApi.pending, (state: LoginState) => {
        state.loadingStatus = 'loading';
      })
      .addCase(loginApi.fulfilled, (state: LoginState, action: PayloadAction<ILogin>) => {
        state.loginEntitity = action.payload;
        state.loadingStatus = 'loaded';
      })
      .addCase(loginApi.rejected, (state: LoginState, action) => {
        state.loadingStatus = 'error';
        state.error = action.error.message;
      });
  }
});

/*
 * Export reducer for store configuration.
 */
export const loginReducer = loginSlice.reducer;

/*
 * Export action creators to be dispatched. For use with the `useDispatch` hook.
 *
 * e.g.
 * ```
 * import React, { useEffect } from 'react';
 * import { useDispatch } from 'react-redux';
 *
 * // ...
 *
 * const dispatch = useDispatch();
 * useEffect(() => {
 *   dispatch(loginActions.add({ id: 1 }))
 * }, [dispatch]);
 * ```
 *
 * See: https://react-redux.js.org/next/api/hooks#usedispatch
 */
export const loginActions = loginSlice.actions;

/*
 * Export selectors to query state. For use with the `useSelector` hook.
 *
 * e.g.
 * ```
 * import { useSelector } from 'react-redux';
 *
 * // ...
 *
 * const entities = useSelector(selectAllLogin);
 * ```
 *
 * See: https://react-redux.js.org/next/api/hooks#useselector
 */
const { selectAll, selectEntities } = loginAdapter.getSelectors();

export const getLoginState = (rootState: RootState): LoginState => rootState[LOGIN_FEATURE_KEY];

export const selectAllLogin = createSelector(getLoginState, selectAll);

export const selectLoginEntities = createSelector(getLoginState, selectEntities);

export default loginSlice.reducer;