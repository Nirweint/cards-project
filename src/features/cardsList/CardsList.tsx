import React, {useEffect} from 'react';
import {Navigate, NavLink, useParams} from "react-router-dom";
import {PATH} from "../../app/routes/RoutesComponent";
import s from './CardsList.module.css';
import {Button, Loading} from "../../components";
import {useDispatch, useSelector} from "react-redux";
import {
    selectCurrentCardsPacksId,
    selectListOfCards
} from "../../state/selectors/cards";
import {getCards, setNewCard} from "../../state/middlewares/cards";
import {setCardsCurrentId} from "../../state/actions/cards";
import {selectIsAuth} from "../../state/selectors/auth";
import {selectProfileId} from "../../state/selectors/profile";
import {selectAppStatus} from "../../state/selectors/app";
import {CardItem} from "./cardItem";
import {selectCardPacks} from "../../state/selectors/packs";

export const CardsList = () => {
    const dispatch = useDispatch()
    const {id} = useParams<'id'>()

    const isAuth = useSelector(selectIsAuth)
    const cards = useSelector(selectListOfCards)
    const cardsPacksUserId = useSelector(selectCurrentCardsPacksId)
    const profileId = useSelector(selectProfileId)
    const appStatus = useSelector(selectAppStatus)
    const packs = useSelector(selectCardPacks)



    const currentPack = packs.find(pack => pack._id === id)

    const isUserCardsPack = cardsPacksUserId === profileId

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
            <NavLink
                to={PATH.SHOP_TABLE}
                className={s.link}
            >
                ← {currentPack && currentPack.name}
            </NavLink>
            {cards.length === 0 && isUserCardsPack &&
			<Button
				disabled={appStatus === 'loading'}
				onClick={onAddNewCardClick}
			>
				Add new card
			</Button>}

            {cards.length > 0 ?
                <table className={s.table}>
                    <thead>
                    <tr>
                        <th>Question</th>
                        <th>Answer</th>
                        <th>Last Updated</th>
                        {isUserCardsPack && <th>
							<Button disabled={appStatus === 'loading'}
									onClick={onAddNewCardClick}>Add new card</Button>
						</th>}

                    </tr>
                    </thead>
                    {cards.map(({answer, question, updated, _id}) => {
                        return (
                            <tbody key={_id}>
                            <CardItem
                                answer={answer}
                                question={question}
                                updated={updated}
                                cardId={_id}
                            />
                            </tbody>
                        )
                    })

                    }
                </table> :
                <div className={s.emptyPackWrapper}>
                    <p>{isUserCardsPack ?
                        'This pack is empty. Click add new card to fill this pack'
                        :
                        'This pack is empty.'
                    }</p>
                </div>
            }


        </div>
    );
};
