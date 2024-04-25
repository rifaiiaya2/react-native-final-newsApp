import {store} from '../redux/store/store';
import {setAuthToken} from '../redux/slices/authSlice';
import {decode} from 'base-64';
import {jwtDecode} from 'jwt-decode';
import axios from 'axios';
import {API_URL} from '../env/api';

export const getAccessToken = (): string | null => {
  const state = store.getState();
  return state.auth.accessToken;
};

export const getRefreshToken = (): string | null => {
  const state = store.getState();
  console.log('refresh state', state);
  return state.auth.refreshToken;
};

// export const saveAccessToken = (accessToken: string) => {
//   const currentRefreshToken = getRefreshToken();
//   store.dispatch(
//     setAuthToken({accessToken, refreshToken: currentRefreshToken}),
//   );
// };
export const saveAccessToken = (accessToken: string) => {
  const currentRefreshToken = getRefreshToken();
  if (currentRefreshToken) {
    // Ensure that currentRefreshToken is not null
    store.dispatch(
      setAuthToken({accessToken, refreshToken: currentRefreshToken}),
    );
  } else {
    console.error('No current refresh token available.');
    // Handle the case where there is no refresh token available
  }
};

// Function to check if the token is expired
const isTokenExpired = (token: string): boolean => {
  global.atob = decode;
  const decoded: {exp: number} = jwtDecode(token);
  const currentTime = Date.now() / 1000;
  console.log('decoded exp', decoded.exp);
  return decoded.exp < currentTime;
};

// Function to refresh the token
const refreshToken = async (): Promise<void> => {
  const refreshedToken = getRefreshToken();
  if (refreshedToken) {
    try {
      const response = await axios.post(`${API_URL}/refresh-token`, {
        refreshToken,
      });

      const {accessToken} = response.data;
      console.log('access token', accessToken);
      saveAccessToken(accessToken);
    } catch (error) {
      console.error('Error refreshing token', error);
    }
  }
};
export const postInstance = axios.create({baseURL: `${API_URL}`});
postInstance.interceptors.request.use(
  async config => {
    let token = getAccessToken();
    if (token && isTokenExpired(token)) {
      await refreshToken();
      token = getAccessToken();
      console.log('token', token);
    }
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

export const fetchPosts = async (page = 1, pageSize = 10) => {
  try {
    const response = await postInstance(`${API_URL}/posts`, {
      params: {page, pageSize},
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching posts', error);
    throw error;
  }
};
