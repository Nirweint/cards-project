import React, {useEffect} from 'react';
import {Button} from "../../components";
import show_Table from './shopTable.module.css'
import {useDispatch, useSelector} from "react-redux";
import {RootStateType} from "../../state/store";
import {getPacksOfCards} from "../../state/middlewares/packs";
import PackItam from "../../components/packItem/PackItam";
import {Paginator} from "../../components/paginator";

const ShopTable = () => {

    const dispatch = useDispatch()
    const cardPacks = useSelector((state: RootStateType) => state.packs.pack.cardPacks)

    useEffect(() => {
        dispatch(getPacksOfCards())
    },[dispatch])


    return (
        <div>
            <Paginator/>
            <h2>Table</h2>
            <div className={show_Table.container}>
                <div>Name</div>
                <div>Cards Count</div>
                <div>Update</div>
                <div>URL</div>
                <Button>Add</Button>

            </div>
            <div className={show_Table.container}>
                {cardPacks.map(card => {
                    return  <PackItam  name={card._id} cardcount={card.cardsCount} update={card.updated}/>

                })}
            </div>
        </div>
    );
};

export default ShopTable;