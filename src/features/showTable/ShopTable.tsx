import React, {useEffect} from 'react';
import {Button} from "../../components";
import show_Table from './shopTable.module.css'
import {useDispatch, useSelector} from "react-redux";
import {RootStateType} from "../../state/store";
import {getPacksOfCards} from "../../state/middlewares/packs";
import {Paginator} from "../../components/paginator";


const ShopTable = () => {

    const dispatch = useDispatch()
    const cardPacks = useSelector((state: RootStateType) => state.cards.cardsPack.cards)

    useEffect(() => {
        dispatch(getPacksOfCards())
        console.log(cardPacks)
    },[dispatch])


    return (
        <div>
            <Paginator/>
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