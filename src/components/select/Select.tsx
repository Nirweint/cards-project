import React, {ChangeEvent, useState} from 'react';
import s from './Select.module.css'
import {useDispatch} from "react-redux";
import {setPageSize} from "../../state/actions/packs";

export const Select = () => {

    const dispatch = useDispatch()

    const [selects, setSelects] = useState('')

    const changeSelectValue = (e: ChangeEvent<HTMLSelectElement>) => {

        dispatch(setPageSize(+e.currentTarget.value))
        setSelects(e.currentTarget.value)
    }

    return (
        <div className={s.select}>
           <select value={selects} onChange={changeSelectValue}>
               <option value={5}>5</option>
               <option value={10}>10</option>
               <option value={20}>20</option>
           </select>
        </div>
    );
};

