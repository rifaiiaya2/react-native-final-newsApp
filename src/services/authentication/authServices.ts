import axios, {AxiosError} from 'axios';
import {API_URL} from '../../utils/api';

interface LoginCredentials {
  email: string;
  password: string;
}
interface SignUpCredentials extends LoginCredentials {
  username?: string;
}

interface AuthResponse {
  accessToken: string;
  refreshToken: string;
}
export const loginUser = async (
  credentials: LoginCredentials,
  onSuccess: (token: AuthResponse) => void,
  onError: (error: AxiosError) => void,
) => {
  try {
    const response = await axios.post<AuthResponse>(
      `${API_URL}/login`,
      credentials,

      {
        headers: {'Content-Type': 'application/json'},
      },
    );

    if (response.status === 200) {
      onSuccess({
        accessToken: response.data.accessToken,
        refreshToken: response.data.refreshToken,
      });
    }
  } catch (error) {
    if (axios.isAxiosError(error)) {
      onError(error);
    } else {
      console.error('An unexpected error occurred', error);
    }
  }
};

export const signupUser = async (
  userData: SignUpCredentials,
  onSuccess: (token: AuthResponse) => void,
  onError: (error: AxiosError) => void,
) => {
  try {
    const response = await axios.post<AuthResponse>(
      `${API_URL}/signup`,
      userData,
      {
        headers: {'Content-Type': 'application/json'},
      },
    );

    if (response.status === 200 && response.data.accessToken) {
      onSuccess({
        accessToken: response.data.accessToken,
        refreshToken: response.data.refreshToken,
      });
    }
  } catch (error) {
    if (axios.isAxiosError(error)) {
      onError(error);
    } else {
      console.error('An unexpected error occurred', error);
    }
  }
};
