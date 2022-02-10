import React, {useEffect} from 'react';
import {Main} from "./main";
import {useDispatch} from "react-redux";
import {fetchAuthMe} from "../state/middlewares/authMe";
import {AppError} from "../components";


export const App = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchAuthMe())
    }, [dispatch])

    return (
        <div>
            <AppError/>
            <Main/>
        </div>
    )
}