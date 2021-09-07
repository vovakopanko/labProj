import {applyMiddleware, combineReducers, createStore} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import authReducer from './reducers/authReducer';
import thunkMiddleware from 'redux-thunk';
import homeReducer from './reducers/homeReducer';
import profileReducer from './reducers/profileReducer';
import accountReducer from './reducers/accountsReducer';
import checkingReducer from './reducers/checkingReducer';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

let reducers = combineReducers({
  auth: authReducer,
  home: homeReducer,
  profile: profileReducer,
  account: accountReducer,
  checking: checkingReducer,
});

const persistedReducer = persistReducer(persistConfig, reducers);

type RootReducersType = typeof reducers;
export type AppStateType = ReturnType<RootReducersType>;

type PropertiesTypes<T> = T extends {[key: string]: infer U} ? U : never;

export type InfernActionsType<
  T extends {[key: string]: (...args: any[]) => any},
> = ReturnType<PropertiesTypes<T>>;

export default () => {
  let store = createStore(persistedReducer, applyMiddleware(thunkMiddleware));
  let persistor = persistStore(store);
  return {store, persistor};
};
