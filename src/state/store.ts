import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import {
    appReducer, authReducer,
    passwordRecoveryReducer,
    profileReducer
} from "./reducers";


const rootReducer = combineReducers({
    profile: profileReducer,
    passwordRecovery: passwordRecoveryReducer,
    auth: authReducer,
    app: appReducer,
})

export const store = createStore(rootReducer, applyMiddleware(thunk));

export type RootStateType = ReturnType<typeof rootReducer>