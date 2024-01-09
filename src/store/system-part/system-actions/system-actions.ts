import {createAction} from '@reduxjs/toolkit';
import {AuthorizationStatus} from '../../../consts/autorization-status';


export const setLoadingStatus = createAction<boolean>('data/setQuestionsDataLoadingStatus');

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');

export const setError = createAction<string | null>('data/error');
export const redirectToRoute = createAction<string>('app/redirectToRoute');
