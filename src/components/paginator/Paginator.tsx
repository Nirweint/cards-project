import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import s from './Paginator.module.css'
import {Button} from "../common";
import {setCurrentPage} from "../../state/actions/packs";
import {selectAppStatus} from "../../state/selectors/app";

type PaginatorType = {
    totalCountItems: number,
    itemsPerPage: number,
    currentPage: number
    portionSize: number,
    portionNumber: number,
    setPortionNumber: (portionNumber: number)=> void,
}

export const Paginator = (props: PaginatorType) => {
    const {totalCountItems, itemsPerPage, currentPage, portionSize, portionNumber, setPortionNumber} = props

    const dispatch = useDispatch()

    const appStatus = useSelector(selectAppStatus)

    let pagesCount = Math.ceil(totalCountItems / itemsPerPage)     //всего страниц

    let pagesCountArr = []
    for (let i = 1; i <= pagesCount; i++) {
        pagesCountArr.push(i)
    }

    let portionCount = Math.ceil(pagesCount / portionSize)     //кол-во порций страниц
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1       //стр начало порции
    let rightPortionPageNumber = portionNumber * portionSize         //стр конец порции

    const onClickPageChange = (page: number) => {
        dispatch(setCurrentPage(page))
    }
    const onClickPreviousPortion = () => {
        setPortionNumber(portionNumber - 1)
    }
    const onClickNextPortion = () => {
        setPortionNumber(portionNumber + 1)
    }

    return (
        <div>
            <Button disabled={portionNumber === 1} onClick={onClickPreviousPortion}>PREV</Button>

            {pagesCountArr
                .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                .map(p => {
                    return <button disabled={appStatus === 'loading'} key={p}
                                   className={`${currentPage === p ? s.selectedPage : ''} ${s.pages}`}
                                   onClick={() => onClickPageChange(p)}>{p}</button>
                })
            }

            {portionCount > portionNumber &&
            <Button onClick={onClickNextPortion}>NEXT</Button>
            }
        </div>
    );
};

