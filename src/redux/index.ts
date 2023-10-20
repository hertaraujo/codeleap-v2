import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { useDispatch, TypedUseSelectorHook, useSelector } from 'react-redux';
import { persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
import { authReducer, postsReducer } from '@/redux/slices';

import storage from './custom-storage';
import logger from 'redux-logger';

const authPersistConfig = {
  key: 'auth',
  storage: storage,
  whitelist: ['isAuth', 'jid'],
};

const rootReducer = combineReducers({
  posts: postsReducer,
  auth: persistReducer(authPersistConfig, authReducer),
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(logger),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
