import React, {useEffect} from 'react';
import './App.css';
import {Main} from "./main";
import {useDispatch} from "react-redux";
import {fetchAuthMe} from "../state/middlewares/authMe";

export const App = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchAuthMe())
    }, [dispatch])

    return (
        <div className="App">
            <Main/>
        </div>
    )
}