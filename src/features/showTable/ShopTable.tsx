import React, {useEffect} from 'react';
import {Button} from "../../components";
import show_Table from './shopTable.module.css'
import {useDispatch, useSelector} from "react-redux";
import {shopTableGet} from "../../state/middlewares/shopTable";
import {RootStateType} from "../../state/store";
import {AppStatusType} from "../../state/reducers/app";
import {getPacksOfCards} from "../../state/middlewares/packs";


const ShopTable = () => {

    const dispatch = useDispatch()
    const cardPacks = useSelector((state: RootStateType) => state.cards.cardPack.cards)

    useEffect(() => {
        dispatch(getPacksOfCards())
        console.log(cardPacks)
    },[dispatch])


    return (
        <div>
            <h2>Table</h2>
            <div className={show_Table.container}>
                <div>Product Name</div>
                <div>price</div>
                <Button>Add</Button>
            </div>
            {/*{cardPacks.map(card => {*/}
            {/*    return // <div>{card.page}</div>*/}

            {/*})}*/}
        </div>
    );
};

export default ShopTable;