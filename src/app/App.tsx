import React, {useEffect} from 'react';
import './App.css';
import {Main} from "./main";
import {HashRouter, Navigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {fetchAuthMe} from "../state/middlewares/authMe";
import {PATH} from "./routes/RoutesComponent";
import {selectIsAuth} from "../state/selectors/auth";

export const App = () => {

    const isAuth = useSelector(selectIsAuth)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchAuthMe())
        if (!isAuth) {
            return <Navigate to={PATH.LOGIN}/>
        }
    }, [isAuth, dispatch])

    return (
        <div className="App">
            <HashRouter>
                <Main/>
            </HashRouter>
        </div>
    )
}