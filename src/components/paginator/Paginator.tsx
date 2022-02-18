import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import s from './Paginator.module.css'
import {Button} from "../common";
import {setCurrentPage} from "../../state/actions/packs";

type PaginatorType = {
    totalCountItems: number,
    itemsPerPage: number,
    currentPage: number
    portionSize: number,
}

export const Paginator = (props: PaginatorType) => {
    const {totalCountItems, itemsPerPage, currentPage, portionSize} = props

    const dispatch = useDispatch()

    let pagesCount = Math.ceil(totalCountItems / itemsPerPage)     //всего страниц

    let pagesCountArr = []
    for (let i = 1; i <= pagesCount; i++) {
        pagesCountArr.push(i)
    }

    let portionCount = Math.ceil(pagesCount / portionSize)     //кол-во порций страниц
    let [portionNumber, setPortionNumber] = useState(1)     //изменение текущей порции
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
            {/*<select>*/}
            {/*    {[5, 10, 25, 50, 100].map(op => {*/}
            {/*        return <option>{op}</option>*/}
            {/*    })}*/}
            {/*</select>*/}
            {portionNumber > 1 &&
            <Button onClick={onClickPreviousPortion}>PREV</Button>
            }
            {pagesCountArr
                .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                .map(p => {
                    return <span key={p} className={`${currentPage === p ? s.selectedPage : ''} ${s.pages}`}
                                 onClick={() => onClickPageChange(p)}>{p}</span>
                })
            }

            {portionCount > portionNumber &&
            <Button onClick={onClickNextPortion}>NEXT</Button>
            }
        </div>
    );
};

