import React, {useEffect} from 'react';
import {Button} from "../../components";
import show_Table from './shopTable.module.css'
import {useDispatch, useSelector} from "react-redux";
import {shopTableGet} from "../../state/middlewares/shopTable";
import {RootStateType} from "../../state/store";
import {AppStatusType} from "../../state/reducers/app";
import {getPacksOfCards} from "../../state/middlewares/packs";
import PackItam from "../../components/packItem/PackItam";


const ShopTable = () => {

    const dispatch = useDispatch()
    const cardPacks = useSelector((state: RootStateType) => state.packs.pack.cardPacks)

    useEffect(() => {
        dispatch(getPacksOfCards())
        console.log(cardPacks)
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
                {cardPacks.map(card => {
                    return  <PackItam  name={card._id} cardcount={card.cardsCount} update={card.updated}/>

                })}
            </div>

        </div>
    );
};

export default ShopTable;