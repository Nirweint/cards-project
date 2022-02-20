import React, {ChangeEvent, useState} from 'react';
import {Button, InputText} from "../../../components";
import s from './UpdatePackTitle.module.css'

type UpdatePackTitleType = {
    title: string,
    cancelHandler: () => void,
    submitHandler: (title: string) => void,
}

export const UpdatePackTitle = ({title, cancelHandler, submitHandler}: UpdatePackTitleType) => {

    const [value, setValue] = useState('')

    const changeValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }

    return (
        <>
            <h2>{title}</h2>
            <InputText style={{marginBottom: '20px', width: '95%'}} autoFocus placeholder={'New title'} value={value}
                       onChange={changeValueHandler}/>
            <div className={s.btn}>
                <Button onClick={cancelHandler}>Cancel</Button>
                <Button onClick={() => submitHandler(value)}>Save</Button>
            </div>

        </>
    );
};

