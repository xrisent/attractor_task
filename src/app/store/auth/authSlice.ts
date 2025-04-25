import { AuthState } from '@/entities/Auth/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: AuthState = {
  token: null,
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
    logout: (state) => {
      state.token = null;
      state.error = null;
      state.isLoading = false;
    },
  },
});

export const { setToken, setLoading, setError, logout } = authSlice.actions;
export default authSlice.reducer;