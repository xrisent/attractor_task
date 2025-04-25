import { configureStore } from '@reduxjs/toolkit';
import authReducer from '@/app/store/auth/authSlice';
import profileReducer from '@/app/store/profile/profileSlice';
import repositoriesReducer from '@/app/store/repositories/repositoriesSlice';
import { 
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { setupAxiosInterceptors } from '@/shared/api/axiosInstance';

const persistConfig = {
  key: 'auth',
  storage,
  version: 1,
};

const persistedReducer = persistReducer(persistConfig, authReducer);

export const store = configureStore({
  reducer: {
    auth: persistedReducer,
    profile: profileReducer,
    repositories: repositoriesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

setupAxiosInterceptors(store);

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;