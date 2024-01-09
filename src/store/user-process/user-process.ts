import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {NameSpace} from '../../consts/namespace';
import {AuthorizationStatus} from '../../consts/autorization-status';
import {UserProcess} from '../../types/state';
import {loginAction, logoutAction} from '../api-actions';
import {checkAuthAction} from '../api-actions';

const initialState: UserProcess = {
  authorizationStatus: AuthorizationStatus.Unknown,
};

export const userProcess = createSlice({
  name: NameSpace.User,
  initialState,
  reducers: {
    requireAuthorization : (state, action : PayloadAction<AuthorizationStatus>) => {
      state.authorizationStatus = action.payload;
    }
  },
  extraReducers(builder) {
    builder
      .addCase(checkAuthAction.fulfilled, (state) => {
        state.authorizationStatus = AuthorizationStatus.Auth;
      })
      .addCase(checkAuthAction.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      })
      .addCase(loginAction.fulfilled, (state) => {
        state.authorizationStatus = AuthorizationStatus.Auth;
      })
      .addCase(loginAction.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      })
      .addCase(logoutAction.fulfilled, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      });
  }
});

export const {requireAuthorization} = userProcess.actions;
