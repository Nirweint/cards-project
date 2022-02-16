import React, {useEffect} from 'react';
import {NavLink} from "react-router-dom";
import {PATH} from "../../app/routes/RoutesComponent";
import s from './CardsList.module.css';
import {Button, CardItem} from "../../components";
import {useDispatch, useSelector} from "react-redux";
import {selectListOfCards} from "../../state/selectors/cards";
import {getCards, setNewCard} from "../../state/middlewares/cards";

export const CardsList = () => {
    const cards = useSelector(selectListOfCards)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getCards())
    }, [])

    const onAddNewCardClick = () => {
         dispatch(setNewCard())
    }

    return (
        <div className={s.wrapper}>
            <NavLink to={PATH.SHOP_TABLE}
                     className={s.link}>{'<-'} CardsPackName</NavLink>
            <div>FindComponent</div>

            <table className={s.table}>
                <tr>
                    <th>Question</th>
                    <th>Answer</th>
                    <th>Last Updated</th>
                    <th>
                        <Button onClick={onAddNewCardClick}>Add new card</Button>
                    </th>
                </tr>
                {cards.map(({answer, question, updated, _id}) => {
                    return (
                        <CardItem
                            answer={answer}
                            question={question}
                            updated={updated}
                            cardId={_id}
                        />
                    )
                })}
            </table>
        </div>
    );
};