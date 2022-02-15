import React from 'react';
import {NavLink} from "react-router-dom";
import {PATH} from "../../app/routes/RoutesComponent";
import s from './CardsList.module.css';
import {Button, CardItem} from "../../components";
import {useSelector} from "react-redux";
import {selectListOfCards} from "../../state/selectors/cards";

export const CardsList = () => {
    const cards = useSelector(selectListOfCards)

    return (
        <div className={s.wrapper}>
            <NavLink to={PATH.SHOP_TABLE} className={s.link}>{'<-'} CardsPackName</NavLink>
            <div>FindComponent</div>

            <table className={s.table}>
                <tr>
                    <th>Question</th>
                    <th>Answer</th>
                    <th>Last Updated</th>
                    <th>
                        <Button>Add new card</Button>
                    </th>
                </tr>
                {cards.map(({answer,question, updated}) => {
                    return (
                        <CardItem
                            answer={answer}
                            question={question}
                            updated={updated}
                        />
                    )
                })}


            </table>
        </div>
    );
};