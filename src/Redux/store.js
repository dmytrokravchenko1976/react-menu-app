import { applyMiddleware, createStore } from 'redux';
import reducer from './reducers';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['menu']
};

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = createStore(
  persistedReducer,
  applyMiddleware(thunk)
);

export const persistor = persistStore(store);