import { GithubProfile } from '../../api/github';
import { AxiosError } from 'axios';
import { createAsyncAction } from 'typesafe-actions';

export const GET_USER_PROFILE = 'github/GET_USER_PROFILE';
export const GET_USER_PROFILE_SUCCESS = 'github/GET_USER_PROFILE_SUCCESS';
export const GET_USER_PROFILE_ERROR = 'github/GET_USER_PROFILE_ERROR';

export const getUserProfileAsync = createAsyncAction(
  GET_USER_PROFILE, // request
  GET_USER_PROFILE_SUCCESS, // success
  GET_USER_PROFILE_ERROR, // failure
)<any, GithubProfile, AxiosError>();
