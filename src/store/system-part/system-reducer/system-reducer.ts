import {createReducer} from '@reduxjs/toolkit';
import {
  requireAuthorization,
  setError,
  setLoadingStatus
} from '../system-actions/system-actions';
import {AuthorizationStatus} from '../../../consts/autorization-status';

export type stateType = {
  error: string | null;
  isDataLoading: boolean;
  authorizationStatus : AuthorizationStatus;
}

const activeState : stateType = {
  error: null,
  isDataLoading: false,
  authorizationStatus: AuthorizationStatus.Unknown,
};

export const stateReducer = createReducer(activeState, (builder) => {
  builder
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    })
    .addCase(setLoadingStatus, (state, action) => {
      state.isDataLoading = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    });
});

