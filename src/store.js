import {legacy_createStore as createStore } from "redux";
import reducers from "./redux/reducers";
import storage from 'redux-persist/es/storage'
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
const persistConfig={
    key:'root',
    storage
} 

const persistReducers=persistReducer(persistConfig,reducers)

const store=createStore(persistReducers)
const persist=persistStore(store)
export {
    store,persist
}