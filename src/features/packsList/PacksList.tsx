import React, {useEffect} from 'react';
import {Button, Paginator, PriceRange, Select} from "../../components";
import {useDispatch, useSelector} from "react-redux";
import {addPackTC, getPacksOfCards} from "../../state/middlewares/packs";
import PackItem from "../../components/packItem/PackItem";
import {
    selectCardPacks,
    selectCurrentPage,
    selectMaxCardCount,
    selectMaxCardCountFromState,
    selectMinCardCount,
    selectMinCardCountFromState,
    selectPacksTotalCount,
    selectPageCount,
    selectPageSize,
    selectShowAllPacks
} from "../../state/selectors/packs";
import SideBar from "./sideBar/SideBar";
import s from './PacksList.module.css'
import {Navigate} from "react-router-dom";
import {PATH} from "../../app/routes/RoutesComponent";
import {selectIsAuth} from "../../state/selectors/auth";

let PORTION_SIZE = 5    //размер одной порции страниц пагинации

const PacksList = () => {

    const isAuth = useSelector(selectIsAuth)
    let totalCountPacks = useSelector(selectPacksTotalCount)    //всего эл-тов
    let packsPerPage = useSelector(selectPageCount)   //кол-во элементов на стр
    let currentPage = useSelector(selectCurrentPage)    // текущая стр
    const isShowAllPacks = useSelector(selectShowAllPacks)
    let minCardCount = useSelector(selectMinCardCount)
    let maxCardCount = useSelector(selectMaxCardCount)
    let pageSize = useSelector(selectPageSize)
    let minCardCountFromState = useSelector(selectMinCardCountFromState)
    let maxCardCountFromState = useSelector(selectMaxCardCountFromState)

    const dispatch = useDispatch()
    const cardPacks = useSelector(selectCardPacks)

    const onAddNewPackClick = () => {
        dispatch(addPackTC());
    };

    useEffect(() => {
        dispatch(getPacksOfCards())
    }, [dispatch, currentPage, minCardCount, maxCardCount, isShowAllPacks, pageSize])

    if (!isAuth) {
        return <Navigate replace to={PATH.LOGIN}/>
    }

    return (
        <div className={s.wrapper}>
            <div className={s.row}>

                <div className={s.container}>
                    <SideBar/>
                    <PriceRange min={minCardCountFromState || 0} max={maxCardCountFromState || 1}/>
                </div>

                <div className={s.ct}>
                    <h2>Table</h2>
                    <table className={s.table}>
                        <tr>
                            <th>Name</th>
                            <th>Cards Count</th>
                            <th>Update</th>
                            <th>
                                <Button onClick={onAddNewPackClick}>Add</Button>
                            </th>
                        </tr>
                        {cardPacks.map(({_id, cardsCount, updated, name}) => {
                            return <PackItem name={name} cardsCount={cardsCount} update={updated} _id={_id}/>
                        })}
                    </table>
                    <div className={s.paginator}>
                        {/*<Select/>*/}
                        <Paginator totalCountItems={totalCountPacks} itemsPerPage={packsPerPage}
                                   currentPage={currentPage || 1} portionSize={PORTION_SIZE}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PacksList;