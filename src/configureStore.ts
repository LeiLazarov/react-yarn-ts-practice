import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import { rootReducer } from "./redux/reducers";
import thunk from "redux-thunk";
import promiseMiddleware from "redux-promise-middleware";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

const persistConfig = {
    key: "state",
    storage,
    whitelist: [],
    keyPrefix: "redux-practice"
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middlewares = [thunk, promiseMiddleware];

const configureStore = (preloadedState: any) => {
    const store = createStore(persistedReducer, preloadedState, composeWithDevTools(applyMiddleware(...middlewares)));
    const persistor = persistStore(store);
    return { store, persistor };
};

export default configureStore;
