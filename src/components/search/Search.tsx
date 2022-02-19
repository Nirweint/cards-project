import React, {ChangeEvent, useState} from 'react';
import s from './Search.module.css'
import {Button, InputText} from "../common";
import {useDispatch} from "react-redux";
import {searchPack} from "../../state/actions/packs";

export const Search = () => {
    const dispatch = useDispatch()
    const [query, setQuery] = useState<string>('')
    const [value, setValue] = useState<string>('')

    const onChangeQueryHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setQuery(e.currentTarget.value)
    }

    const searchQueryHandler = () => {
        dispatch(searchPack(query))
        setQuery('')
        setValue(query)
    }
    const resetSearchHandler = () => {
        dispatch(searchPack(''))
        setValue('')
    }


    return (
        <div className={s.search}>
            <InputText placeholder={'🔍 Search...'} name='Search' value={query} onChange={onChangeQueryHandler}/>
            <Button onClick={searchQueryHandler}> Search! </Button>
            <Button onClick={resetSearchHandler}> Reset </Button>
            <div className={s.searchedValue}>{value}</div>
        </div>
    );
};

