import React, {ChangeEvent, useState} from 'react';
import {Button, InputText} from "../common";
import {useSelector} from "react-redux";
import {selectAppStatus} from "../../state/selectors/app";
import s from './Search.module.css'

type SearchType = {
    setSearchValue: (value: string) => void
    className?: string
}

export const Search = ({setSearchValue, className}: SearchType) => {
    const appStatus = useSelector(selectAppStatus)
    const [query, setQuery] = useState<string>('')
    const [value, setValue] = useState<string>('')

    const finalStyle = `${s.search} ${className}`

    const onChangeQueryHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setQuery(e.currentTarget.value)
    }

    const searchQueryHandler = () => {
        setSearchValue(query)
        setQuery('')
        setValue(query)
    }
    const resetSearchHandler = () => {
        setSearchValue('')
        setValue('')
    }


    return (
        <div className={finalStyle}>
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

