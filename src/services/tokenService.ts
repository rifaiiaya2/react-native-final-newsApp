import {store} from '../redux/store/store';
import {setAuthToken} from '../redux/slices/authSlice';

export const getAccessToken = (): string | null => {
  const state = store.getState();
  return state.auth.accessToken;
};

export const getRefreshToken = (): string | null => {
  const state = store.getState();
  return state.auth.refreshToken;
};
export const saveAccessToken = (accessToken: string) => {
  const currentRefreshToken = getRefreshToken();
  if (currentRefreshToken) {
    store.dispatch(
      setAuthToken({accessToken, refreshToken: currentRefreshToken}),
    );
  } else {
    console.error('No current refresh token available.');
  }
};
