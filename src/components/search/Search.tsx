import React, {ChangeEvent, useState} from 'react';
import s from './Search.module.css'
import {Button, InputText} from "../common";
import {searchPackThunk} from "../../state/middlewares/search";
import {useDispatch} from "react-redux";

export const Search = () => {
    const dispatch = useDispatch()
    const [query, setQuery] = useState<string>('')

    const onChangeQueryHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setQuery(e.currentTarget.value)
    }

    const searchQueryHandler = () => {
        dispatch(searchPackThunk(query))
        setQuery('')
    }

    return (
        <div className={s.search}>
            <InputText placeholder={'🔍 Search...'} name='Search' value={query} onChange={onChangeQueryHandler}/>
            <Button onClick={searchQueryHandler}> Search! </Button>

        </div>
    );
};

