import React, {useEffect, useState} from 'react';
import {Button, Paginator, PriceRange, Search, Select, Sort} from "../../components";
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
    selectPageSize,
    selectSearchPack,
    selectSelectQuantityItems,
    selectShowAllPacks,
    selectSortPacks
} from "../../state/selectors/packs";
import SideBar from "./sideBar/SideBar";
import s from './PacksList.module.css'
import {Navigate} from "react-router-dom";
import {PATH} from "../../app/routes/RoutesComponent";
import {PORTION_SIZE} from "../../constants";
import {selectIsAuth} from "../../state/selectors/auth";
import {Modal} from "../../components";
import {UpdatePackTitle} from "./updatePackTitle/UpdatePackTitle";
import {setCurrentPage, setSearchPack} from "../../state/actions/packs";


const PacksList = () => {

    const cardPacks = useSelector(selectCardPacks)
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
    const sortPacks = useSelector(selectSortPacks)

    const [portionNumber, setPortionNumber] = useState(1)     //изменение текущей порции
    const [showAddNewPackModal, setShowAddNewPackModal] = useState<boolean>(false)

    const dispatch = useDispatch()

    const onAddNewPackClick = () => {
        setShowAddNewPackModal(true)
    };
    const notAddNewPackHandler = () => {
        setShowAddNewPackModal(false)
    };
    const addNewPackHandler = (title: string) => {
        setShowAddNewPackModal(false)
        dispatch(addPackTC(title));
    };

    const handleSetCurrentPage = (page: number) => {
        dispatch(setCurrentPage(page))
    };

    const handleSetSearchValue = (value: string) => {
        dispatch(setSearchPack(value))
    };

    useEffect(() => {
        dispatch(getPacksOfCards())
    }, [dispatch, currentPage, minCardCount, maxCardCount, isShowAllPacks, pageSize, searchPack, sortPacks])

    if (!isAuth) {
        return <Navigate replace to={PATH.LOGIN}/>
    }

    return (
        <>
            <div className={s.wrapper}>
                <div className={s.row}>

                    <div className={s.container}>
                        <SideBar/>
                        <PriceRange min={minCardCountFromState || 0}
                                    max={maxCardCountFromState || 1}/>
                    </div>

                    <div className={s.tableWrapper}>
                        <Search setSearchValue={handleSetSearchValue}/>
                        <table className={s.table}>
                            <thead>
                            <tr>
                                <th>Name</th>
                                <th>Cards Count</th>
                                <th className={s.sortWrapper}>
                                    Update
                                    <div className={s.sort}>
                                        <Sort setPortionNumber={setPortionNumber}/>
                                    </div>
                                </th>
                                <th className={s.actions}>
                                    <Button onClick={onAddNewPackClick}>
                                        Add new pack
                                    </Button>
                                </th>
                            </tr>
                            </thead>
                            <tbody>
                            {cardPacks.map(({
                                                _id,
                                                cardsCount,
                                                updated,
                                                user_id,
                                                name
                                            }) => {
                                return <PackItem key={_id} name={name}
                                                 cardsCount={cardsCount}
                                                 user_id={user_id}
                                                 update={updated} _id={_id}/>
                            })}
                            </tbody>
                        </table>
                        <div className={s.paginator}>
                            <Select selectItemsPerPage={selectItem}
                                    listValues={[5, 10, 20]}/>
                            <Paginator
                                totalCountItems={totalCountPacks}
                                itemsPerPage={packsPerPage}
                                currentPage={currentPage || 1}
                                portionSize={PORTION_SIZE}
                                portionNumber={portionNumber}
                                setPortionNumber={setPortionNumber}
                                setCurrentPage={handleSetCurrentPage}
                            />
                        </div>
                    </div>
                </div>
            </div>
            {showAddNewPackModal &&
			<Modal setShow={notAddNewPackHandler}>
				<UpdatePackTitle title={'Create new pack'}
								 cancelHandler={notAddNewPackHandler}
								 submitHandler={addNewPackHandler}/>
			</Modal>
            }
        </>
    );
};

export default PacksList;