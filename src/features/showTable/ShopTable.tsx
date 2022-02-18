import React, {useEffect} from 'react';
import {Button, Paginator, PriceRange} from "../../components";
import {useDispatch, useSelector} from "react-redux";
import {getPacksOfCards} from "../../state/middlewares/packs";
import PackItem from "../../components/packItem/PackItem";
import {
    selectCardPacks,
    selectCurrentPage,
    selectPacksTotalCount,
    selectPageCount,
    selectShowAllPacks
} from "../../state/selectors/packs";
import PacksCards from "../ShowPacksCards/PacksCards";
import s from './shopTable.module.css'
import {Navigate} from "react-router-dom";
import {PATH} from "../../app/routes/RoutesComponent";
import {selectIsAuth} from "../../state/selectors/auth";


const PORTION_SIZE = 5    //размер одной порции страниц пагинации

const ShopTable = () => {

    const isAuth = useSelector(selectIsAuth)
    let totalCountPacks = useSelector(selectPacksTotalCount)    //всего эл-тов
    let packsPerPage = useSelector(selectPageCount)   //кол-во элементов на стр
    let currentPage = useSelector(selectCurrentPage)    // текущая стр
    const isShowAllPacks = useSelector(selectShowAllPacks)



    const dispatch = useDispatch()
    const cardPacks = useSelector(selectCardPacks)

    useEffect(() => {
        dispatch(getPacksOfCards())
    }, [dispatch, currentPage, isShowAllPacks])

    if (!isAuth) {
        return <Navigate replace to={PATH.LOGIN}/>
    }

    return (
        <div className={s.wrapper}>
            <div className={s.row}>

                <div className={s.container}>
                    <PacksCards/>
                    <PriceRange/>
                </div>

                <div className={s.ct}>
                    <h2>Table</h2>
                    <table className={s.table}>
                        <tr>
                            <th>Name</th>
                            <th>Cards Count</th>
                            <th>Update</th>
                            <th>
                                <Button>Add</Button>
                            </th>
                        </tr>
                        {cardPacks.map(({_id, cardsCount, updated, name}) => {
                            return <PackItem name={name} cardsCount={cardsCount} update={updated} _id={_id}/>
                        })}
                    </table>
                    <div className={s.paginator}>
                        <Paginator totalCountItems={totalCountPacks} itemsPerPage={packsPerPage}
                                   currentPage={currentPage} portionSize={PORTION_SIZE}/>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ShopTable;