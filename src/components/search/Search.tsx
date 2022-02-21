import React, {ChangeEvent, useState} from 'react';
import {Button, InputText} from "../common";
import {useDispatch, useSelector} from "react-redux";
import {searchPack} from "../../state/actions/packs";
import {selectAppStatus} from "../../state/selectors/app";
import s from './Search.module.css'

export const Search = () => {
    const dispatch = useDispatch()
    const appStatus = useSelector(selectAppStatus)
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
            <InputText
                style={{marginRight: '5px'}}
                placeholder={'🔍 Search...'}
                name='Search'
                value={query}
                onChange={onChangeQueryHandler}
            />
            <Button
                className={s.btn}
                disabled={appStatus === 'loading'}
                onClick={searchQueryHandler}
            > Search!
            </Button>
            <Button
                className={s.btn}
                disabled={appStatus === 'loading'}
                onClick={resetSearchHandler}> Reset
            </Button>
            <div className={s.searchedValue}>{value}</div>
        </div>
    );
};

