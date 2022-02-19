import React, {useEffect} from 'react';
import {Button, Paginator, PriceRange, Search, Select} from "../../components";
import {useDispatch, useSelector} from "react-redux";
import {addPackTC, getPacksOfCards} from "../../state/middlewares/packs";
import PackItem from "./packItem/PackItem";
import {
    selectCardPacks,
    selectCurrentPage,
    selectMaxCardCount,
    selectMaxCardCountFromState,
    selectMinCardCount,
    selectMinCardCountFromState,
    selectPacksTotalCount,
    selectPageCount,
    selectPageSize, selectSearchPack, selectSelectQuantityItems,
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
    const totalCountPacks = useSelector(selectPacksTotalCount)    //всего эл-тов
    const packsPerPage = useSelector(selectPageCount)   //кол-во элементов на стр
    const currentPage = useSelector(selectCurrentPage)    // текущая стр
    const isShowAllPacks = useSelector(selectShowAllPacks)
    const minCardCount = useSelector(selectMinCardCount)
    const maxCardCount = useSelector(selectMaxCardCount)
    const pageSize = useSelector(selectPageSize)
    const minCardCountFromState = useSelector(selectMinCardCountFromState)
    const maxCardCountFromState = useSelector(selectMaxCardCountFromState)
    const selectItem = useSelector(selectSelectQuantityItems)
    const searchPack = useSelector(selectSearchPack)

    const dispatch = useDispatch()
    const cardPacks = useSelector(selectCardPacks)

    const onAddNewPackClick = () => {
        dispatch(addPackTC());
    };

    useEffect(() => {
        dispatch(getPacksOfCards())
    }, [dispatch, currentPage, minCardCount, maxCardCount, isShowAllPacks, pageSize, searchPack])

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

                <div className={s.tableWrapper}>
                    <Search/>
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
                            return <PackItem key={_id} name={name} cardsCount={cardsCount} update={updated} _id={_id}/>
                        })}
                    </table>
                    <div className={s.paginator}>
                        <Select selectItemsPerPage={selectItem} listValues={[5, 10, 20]}/>
                        <Paginator totalCountItems={totalCountPacks} itemsPerPage={packsPerPage}
                                   currentPage={currentPage || 1} portionSize={PORTION_SIZE}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PacksList;