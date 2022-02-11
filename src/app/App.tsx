import React, {useEffect} from 'react';
import {Main} from "./main";
import {useDispatch} from "react-redux";
import {fetchAuthMe} from "../state/middlewares/authMe";
import {AppError} from "../components";
import s from './App.module.css'


export const App = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchAuthMe())
    }, [dispatch])

    return (
        <div className={s.app}>
            <AppError/>
            <Main/>
        </div>
    )
}