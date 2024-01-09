import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {NameSpace} from '../../consts/namespace';
import {SystemProcess} from '../../types/state';

const initialState: SystemProcess = {
  error: null,
  isDataLoading: false,
};

export const systemProcess = createSlice({
  name: NameSpace.User,
  initialState,
  reducers: {
    setError : (state, action : PayloadAction<string | null>) => {
      state.error = action.payload;
    },
    setLoadingStatus : (state, action : PayloadAction<boolean>) => {
      state.isDataLoading = action.payload;
    }
  }
});

export const {setLoadingStatus, setError} = systemProcess.actions;
