import React, {useState} from 'react';
import s from './Sort.module.css'
import imgSort from '../../assets/images/sort.svg'
import {useDispatch} from "react-redux";
import {setCurrentPage, SortPacksName} from "../../state/actions/packs";

const SORT_LOW = '0updated'
const SORT_HIGH = '1updated'

type SortType = {
    setPortionNumber: (portionNumber: number)=> void
}

export const Sort = ({setPortionNumber}: SortType) => {

    const [sort, setSort] = useState<'0updated' | '1updated'>(SORT_LOW)

    const dispatch = useDispatch()

    const sortLowHandler = () => {
        dispatch(SortPacksName(SORT_LOW))
        setSort(SORT_LOW)
        dispatch(setCurrentPage(1))
        setPortionNumber(1)
    }
    const sortHighHandler = () => {
        dispatch(SortPacksName(SORT_HIGH))
        setSort(SORT_HIGH)
        dispatch(setCurrentPage(1))
        setPortionNumber(1)
    }

    return (
        <>
            {sort === SORT_HIGH &&
            <div onClick={sortLowHandler} className={s.sort}>
               <img src={imgSort} alt={'sorting'}/>
            </div>
            }
            {sort === SORT_LOW &&
            <div onClick={sortHighHandler} className={s.sort}>
                <img src={imgSort} alt={'sorting'}/>
            </div>
            }
        </>

    );
};
