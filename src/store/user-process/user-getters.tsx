import {State} from '../../types/state';

export const getAuthorizationStatus = (state: State) => state.USER.authorizationStatus;
