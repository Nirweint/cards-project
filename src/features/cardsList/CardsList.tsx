import React, {useEffect} from 'react';
import {Navigate, NavLink, useParams} from "react-router-dom";
import {PATH} from "../../app/routes/RoutesComponent";
import s from './CardsList.module.css';
import {Button} from "../../components";
import {useDispatch, useSelector} from "react-redux";
import {selectCurrentCardsPacksId, selectListOfCards} from "../../state/selectors/cards";
import {getCards, setNewCard} from "../../state/middlewares/cards";
import {setCardsCurrentId} from "../../state/actions/cards";
import {selectIsAuth} from "../../state/selectors/auth";
import {selectProfileId} from "../../state/selectors/profile";
import {selectAppStatus} from "../../state/selectors/app";
import {CardItem} from "./cardItem";

export const CardsList = () => {
    const dispatch = useDispatch()
    const {id} = useParams<'id'>()


    const isAuth = useSelector(selectIsAuth)
    const cards = useSelector(selectListOfCards)
    const cardsPackId = useSelector(selectCurrentCardsPacksId)
    const profileId = useSelector(selectProfileId)
    const appStatus = useSelector(selectAppStatus)

    const isUserCardsPack = cardsPackId === profileId

    useEffect(() => {
        if (id) {
            dispatch(setCardsCurrentId(id))
        }
        dispatch(getCards())
    }, [])

    const onAddNewCardClick = () => {
         dispatch(setNewCard())
    }

    if (!isAuth) {
        return <Navigate replace to={PATH.LOGIN}/>
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
                    {isUserCardsPack && <th>
						<Button disabled={appStatus === 'loading'} onClick={onAddNewCardClick}>Add new card</Button>
					</th>}

                </tr>
                {cards.map(({answer, question, updated, _id}) => {
                    return (
                        <CardItem
                            key={_id}
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