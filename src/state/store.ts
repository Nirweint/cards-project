import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import {
    appReducer, authReducer,
    loginReducer, newPasswordEnterReducer, passwordRecoveryReducer,
    profileReducer, signUpReducer
} from "./reducers";


const rootReducer = combineReducers({
    profile: profileReducer,
    login: loginReducer,
    signUp: signUpReducer,
    newPasswordEnter: newPasswordEnterReducer,
    passwordRecovery: passwordRecoveryReducer,
    auth: authReducer,
    app: appReducer,
})

export const store = createStore(rootReducer, applyMiddleware(thunk));

export type RootStateType = ReturnType<typeof rootReducer>