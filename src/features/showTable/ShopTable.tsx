import React, {useEffect} from 'react';
import {Button, Paginator, PriceRange} from "../../components";
import show_Table from './shopTable.module.css'
import {useDispatch, useSelector} from "react-redux";
import {getPacksOfCards} from "../../state/middlewares/packs";
import PackItem from "../../components/packItem/PackItem";
import {selectCardPacks, selectCurrentPage, selectPacksTotalCount, selectPageCount} from "../../state/selectors/packs";
import PacksCards from "../ShowPacksCards/PacksCards";


let PORTION_SIZE = 5    //размер одной порции страниц пагинации

const ShopTable = () => {

    let totalCountPacks = useSelector(selectPacksTotalCount)    //всего эл-тов
    let packsPerPage = useSelector(selectPageCount)   //кол-во элементов на стр
    let currentPage = useSelector(selectCurrentPage)    // текущая стр


    const dispatch = useDispatch()
    const cardPacks = useSelector(selectCardPacks)

    useEffect(() => {
        dispatch(getPacksOfCards())
    }, [dispatch, currentPage])

    return (
        <div className={show_Table.wrapper}>
            <div className={show_Table.row}>

                <div className={show_Table.container}>
                    <PacksCards/>
                    <PriceRange/>
                </div>

                <div className={show_Table.ct}>
                    <h2>Table</h2>
                    <table className={show_Table.table}>
                        <tr>
                            <th>Name</th>
                            <th>Cards Count</th>
                            <th>Update</th>
                            <th>
                                <Button>Add</Button>
                            </th>
                        </tr>
                        {cardPacks.map(({_id, cardsCount, updated, name}) => {
                            return <PackItem _id={_id} name={name} cardsCount={cardsCount} update={updated}/>
                        })}
                    </table>
                    <div className={show_Table.paginator}>
                        <Paginator totalCountItems={totalCountPacks} itemsPerPage={packsPerPage}
                                   currentPage={currentPage} portionSize={PORTION_SIZE}/>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ShopTable;