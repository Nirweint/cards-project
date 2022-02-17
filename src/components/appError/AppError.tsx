import React, {useEffect} from 'react';
import s from './AppError.module.css'
import {useDispatch, useSelector} from "react-redux";
import {selectAppError} from "../../state/selectors/app";
import {setAppError} from "../../state/actions/app";
import errorIcon from '../../assets/images/errorIcon.png'

export const AppError = () => {
    const dispatch = useDispatch()
    const appError = useSelector(selectAppError)

    useEffect(() => {
        const id = setTimeout(() => {
            dispatch(setAppError(null))
            return () => clearTimeout(id)
        }, 3000)
    }, [appError, dispatch])

    const showError = appError !== null

    const wrapperStyle = `${s.wrapper} ${showError ? s.show : ''}`

    return (
        <div className={wrapperStyle}>
            <div className={s.notification}>
                <img src={errorIcon} alt='err' className={s.errorIcon}/>
                <span>Error: {appError}</span>
            </div>
        </div>
    );
};