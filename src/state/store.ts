import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import {appReducer, profileReducer} from "./reducers";


const rootReducer = combineReducers({
    app: appReducer,
    profile: profileReducer,
})

export const store = createStore(rootReducer, applyMiddleware(thunk));

export type RootStateType = ReturnType<typeof rootReducer>



