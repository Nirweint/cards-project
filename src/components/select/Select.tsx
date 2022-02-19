import React, {ChangeEvent, useState} from 'react';
import s from './Select.module.css'
import {useDispatch} from "react-redux";
import {setPageSize} from "../../state/actions/packs";

type SelectType = {
    selectItemsPerPage: number,
    listValues: number[],
}

export const Select = ({selectItemsPerPage, listValues}: SelectType) => {

    const dispatch = useDispatch()

    const [selects, setSelects] = useState(`${selectItemsPerPage}`)

    const changeSelectValue = (e: ChangeEvent<HTMLSelectElement>) => {
        dispatch(setPageSize(+e.currentTarget.value))
        setSelects(e.currentTarget.value)
    }

    return (
        <div className={s.select}>
           <select value={selects} onChange={changeSelectValue}>
               {listValues.map(it => <option key={it} value={it}>{it}</option>)}
           </select>
        </div>
    );
};

