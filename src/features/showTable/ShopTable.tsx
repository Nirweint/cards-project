import React, {useEffect} from 'react';
import {Button} from "../../components";
import show_Table from './shopTable.module.css'
import {useDispatch, useSelector} from "react-redux";
import {RootStateType} from "../../state/store";
import {getPacksOfCards} from "../../state/middlewares/packs";
import PackItem from "../../components/packItem/PackItem";
import {Paginator} from "../../components/paginator";
// import s from "../cardsList/CardsList.module.css";
import PacksCards from "../ShowPacksCards/PacksCards";


const ShopTable = () => {

    const dispatch = useDispatch()
    const cardPacks = useSelector((state: RootStateType) => state.packs.pack.cardPacks)

    useEffect(() => {
        dispatch(getPacksOfCards())
    },[dispatch])


    return (
        <div className={show_Table.wrapper}>
            <div className={show_Table.row}>

                <div className={show_Table.container}>
                    <PacksCards />
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
                        {cardPacks.map(({_id, cardsCount,updated, name}) => {
                            return  <PackItem name={name} cardsCount={cardsCount} update={updated}/>
                        })}


                    </table>
                    <div className={show_Table.paginator}>
                        <Paginator/>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ShopTable;