import {State} from '../../types/state';

export const getIsDataLoading = (state: State) => state.SYSTEM.isDataLoading;
export const getError = (state: State) => state.SYSTEM.error;
