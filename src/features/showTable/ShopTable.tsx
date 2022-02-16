import React, {useEffect} from 'react';
import {Button, Paginator} from "../../components";
import show_Table from './shopTable.module.css'
import {useDispatch, useSelector} from "react-redux";
import {RootStateType} from "../../state/store";
import {getPacksOfCards} from "../../state/middlewares/packs";
import PackItem from "../../components/packItem/PackItem";
import {selectCurrentPage, selectPacksTotalCount, selectPageCount} from "../../state/selectors/packs";

const ShopTable = () => {

    let totalCountPacks = useSelector(selectPacksTotalCount)    //всего эл-тов
    let packsPerPage = useSelector(selectPageCount)   //кол-во элементов на стр
    let currentPage = useSelector(selectCurrentPage)    // текущая стр
    let portionSize = 5    //размер одной порции страниц пагинации

    const dispatch = useDispatch()
    const cardPacks = useSelector((state: RootStateType) => state.packs.pack.cardPacks)

    useEffect(() => {
        dispatch(getPacksOfCards())
    },[dispatch])


    return (
        <div>
            <h2>Table</h2>
            <div className={show_Table.container}>
                <div>Name</div>
                <div>Cards Count</div>
                <div>Update</div>
                <div>URL</div>
                <Button>Add</Button>

            </div>
            <div className={show_Table.container}>
                {cardPacks.map(({_id, cardsCount,updated, name}) => {
                    return  <PackItem name={name} cardsCount={cardsCount} update={updated}/>

                })}
            </div>
            <Paginator totalCountItems={totalCountPacks} itemsPerPage={packsPerPage} currentPage={currentPage} portionSize={portionSize}/>
        </div>
    );
};

export default ShopTable;