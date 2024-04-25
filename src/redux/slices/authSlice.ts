import {Action, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {REHYDRATE} from 'redux-persist';
interface IAuthState {
  accessToken: string | null;
  refreshToken: string | null;
  rehydrated: boolean;
}
interface RehydratePayload {
  auth: IAuthState;
}

interface RehydrateAction extends Action<typeof REHYDRATE> {
  payload?: RehydratePayload;
}
const initialState: IAuthState = {
  accessToken: null,
  refreshToken: null,
  rehydrated: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setRefreshToken(state, action: PayloadAction<string>) {
      state.refreshToken = action.payload;
    },
    setAuthToken(
      state,
      action: PayloadAction<{accessToken: string; refreshToken: string}>,
    ) {
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
    },
    clearAuthToken(state) {
      state.accessToken = null;
      state.refreshToken = null;
    },
  },
  extraReducers: builder => {
    builder.addCase(REHYDRATE, (state, action: RehydrateAction) => {
      if (action.payload) {
        state.accessToken = action.payload.auth.accessToken;
        state.refreshToken = action.payload.auth.refreshToken;
      }
      state.rehydrated = true;
    });
  },
});
export const {clearAuthToken, setAuthToken, setRefreshToken} =
  authSlice.actions;
export default authSlice.reducer;
